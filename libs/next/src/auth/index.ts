import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export const NextAuthHandler = NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: (credentials) => {
        if (
          credentials?.username === 'test@hospe.com' &&
          credentials?.password === 'test123'
        ) {
          return {
            id: 1,
            name: 'Test User',
            email: 'test@hospe.com',
          };
        }

        return null;
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
