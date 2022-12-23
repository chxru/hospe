export interface UserLoginReq {
  email: string;
  password: string;
  role: string;
}

interface IToken {
  value: string;
  expires: number;
}

export interface UserLoginRes {
  id: string;
  email: string;
  displayName: string;
  tokens: {
    access: IToken;
    refresh: IToken;
  };
}

export interface UserRegisterReq {
  email: string;
  password: string;
  displayName: string;
}

export type UserRegisterRes = UserLoginRes;

export interface UserTokenRefreshReq {
  refreshToken: string;
}

export interface TokenRefreshRes {
  id: string;
  email: string;
  displayName: string;
  accessToken: string;
}
