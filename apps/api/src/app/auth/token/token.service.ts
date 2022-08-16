import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cache } from 'cache-manager';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid/async';

import { Role } from '../rbac/role.enum';
import { RefreshToken } from './schema/token.schema';

/**
 * Expiration time in minutes
 */
export const ACCESS_TOKEN_EXPIRATION = 20;

/**
 * Expiration time in days.
 */
export const REFRESH_TOKEN_EXPIRATION = 7;

@Injectable()
export class TokenService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly authRedis: Cache,
    @InjectModel(RefreshToken.name)
    private readonly RefreshTokenModel: Model<RefreshToken>
  ) {}

  /**
   * Create access token, save it in redis and return it.
   * @param roles
   * @returns
   */
  async createAccessToken(roles: Role[]) {
    const token = await nanoid();

    await this.authRedis.set(`access:${token}`, roles, {
      ttl: 60 * ACCESS_TOKEN_EXPIRATION,
    });

    return token;
  }

  /**
   * Create refresh token, save it in mongodb and return it.
   * @param roles
   * @returns
   */
  async createRefreshToken(roles: Role[]) {
    const token = await nanoid();
    const today = new Date();
    const expiredAt = new Date(
      today.setDate(today.getDate() + REFRESH_TOKEN_EXPIRATION)
    );

    const refreshToken = new this.RefreshTokenModel({
      _id: token,
      expiredAt,
      roles,
    });

    try {
      await refreshToken.save();
    } catch (error) {
      Logger.error(
        'Error occurred while saving refresh token',
        error instanceof Error ? error.message : ''
      );

      throw new InternalServerErrorException(
        'Could not save refresh token in database'
      );
    }

    return token;
  }

  /**
   * Validate given refresh token, return roles if valid.
   * @param token refresh token
   * @returns
   */
  async validateRefreshToken(token: string) {
    const doc = await this.RefreshTokenModel.findById(token).exec();

    if (!doc) {
      return false;
    }

    const { expiredAt, roles } = doc;

    // if token is expired, delete it from the db
    if (expiredAt < new Date()) {
      await this.RefreshTokenModel.findByIdAndDelete(token).exec();
      return false;
    }

    return roles;
  }
}
