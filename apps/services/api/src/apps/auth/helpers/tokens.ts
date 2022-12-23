import { nanoid } from 'nanoid/async';
import { createClient } from 'redis';

import type { Roles } from '@hospe/types';

import { RefreshTokenModel } from '../auth.schema';

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

// redis
const redis = createClient({
  socket: {
    host: REDIS_HOST,
    port: Number(REDIS_PORT),
  },
});

redis.on('error', (err) => {
  console.log('REDIS ERROR: ' + err);
});

interface RedisPayload {
  id: string;
  role: Roles;
}

/**
 * Initiate redis connection.
 */
export const ConnectRedis = async () => {
  await redis.connect();
};

/**
 * Expiration time in minutes
 */
export const ACCESS_TOKEN_EXPIRATION = 20;

/**
 * Expiration time in days.
 */
export const REFRESH_TOKEN_EXPIRATION = 7;

/**
 * Create access token, save it in redis and return it.
 * @param roles
 * @returns
 */
export const CreateAccessToken = async (id: string, role: Roles) => {
  const token = await nanoid();

  const payload: RedisPayload = {
    id,
    role,
  };

  await redis.set(`access:${token}`, JSON.stringify(payload), {
    EX: 60 * ACCESS_TOKEN_EXPIRATION,
    NX: true,
  });

  return token;
};

/**
 * Create refresh token, save it in mongodb and return it.
 * @param roles
 * @returns
 */
export const CreateRefreshToken = async (id: string, role: Roles) => {
  const token = await nanoid();
  const today = new Date();
  const expiredAt = new Date(
    today.setDate(today.getDate() + REFRESH_TOKEN_EXPIRATION)
  );

  const refreshToken = new RefreshTokenModel({
    _id: token,
    expiredAt,
    role,
    userId: id,
  });

  await refreshToken.save();

  return token;
};

/**
 * Validate given access token, return roles if valid.
 * @param token refresh token
 * @returns
 */
export const ValidateAccessToken = async (token: string) => {
  const payload = await redis.get(`access:${token}`);

  if (!payload) {
    return false;
  }

  return JSON.parse(payload) as RedisPayload;
};

/**
 * Validate given refresh token, return roles if valid.
 * @param token refresh token
 * @returns
 */
export const ValidateRefreshToken = async (token: string) => {
  const refreshToken = await RefreshTokenModel.findById(token).exec();

  if (!refreshToken) {
    return false;
  }

  const today = new Date();

  // if token is expired, delete it from the db
  if (refreshToken.expiredAt < today) {
    await refreshToken.delete();
    return false;
  }

  return { userId: refreshToken.userId, role: refreshToken.role };
};
