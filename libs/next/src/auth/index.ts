import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import fetch from 'node-fetch';

import type { UserLoginRes } from '@hospe/types';

export const NextAuthHandler = NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const param = {
          email: credentials.username,
          password: credentials.password,
        };

        // TODO: replace with real API endpoint
        const res = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          body: JSON.stringify(param),
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) return null;

        const data: UserLoginRes = await res.json();

        return data;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token['id'] = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session['token'] = token;
      }

      return session;
    },
  },
  // TODO: Update secret
  secret: 'supersecretkeyyoushouldnotcommittogithub',
  jwt: {
    secret: 'supersecretkeyyoushouldnotcommittogithub',
  },
  pages: {
    signIn: '/auth',
  },
});
