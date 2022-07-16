export interface UserLoginReq {
  email: string;
  password: string;
}

export interface UserLoginRes {
  id: string;
  email: string;
  displayName: string;
}

export interface UserRegisterReq {
  email: string;
  password: string;
  displayName: string;
}

export type UserRegisterRes = UserLoginRes;
