import { TokenRefreshRes } from '@hospe/types';
import create from 'zustand';

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  id: string | null;
  displayName: string | null;
  email: string | null;
  accessToken: string | null;
  onSignIn: (
    id: string,
    displayName: string,
    email: string,
    accessToken: string
  ) => void;
  onSignOut: () => void;
  toggleLoading: () => void;
  updateToken: (data: TokenRefreshRes) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  /** Loading state */
  isLoading: true,

  /** Auth State */
  isAuthenticated: false,

  /** User id */
  id: '',

  /** User's display name */
  displayName: '',

  /** User's public email */
  email: '',

  /** User's access token */
  accessToken: '',

  /** Toggle loading state */
  toggleLoading: () =>
    set((state) => ({
      ...state,
      isLoading: !state.isLoading,
    })),

  /** Update store on user authenticate */
  onSignIn: (id: string, displayName: string, email: string, token: string) =>
    set((state) => ({
      ...state,
      displayName,
      email,
      accessToken: token,
      isAuthenticated: true,
    })),

  /** Update store on user logout */
  onSignOut: () =>
    set((state) => ({
      ...state,
      isAuthenticated: false,
      id: null,
      displayName: null,
      email: null,
      accessToken: null,
    })),

  updateToken: (data: TokenRefreshRes) =>
    set((state) => ({
      ...state,
      ...data,
      isAuthenticated: !!data.accessToken,
    })),
}));
