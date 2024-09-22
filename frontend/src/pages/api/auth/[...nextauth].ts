/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import { instance } from '@infrastructure/client';
import GitHubProvider from 'next-auth/providers/github';
import { ApiEndpoints } from '@infrastructure/api/constants';

export default NextAuth({
  jwt: {
    secret: 'secret',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account) {
        return {};
      } else if (user) {
        return {
          ...token,
          role: user.role,
          access_token: user.access_token,
          error: undefined,
        };
      } else if (token && token.access_token) {
        const res = await instance.get(ApiEndpoints.GET_AUTH_INFO, {
          headers: {
            Authorization: `Bearer ${(token as any).access_token}`,
          },
        });
        if (res.data.code === 200) {
          if (token.access_token !== (res.data.data as any).access_token) {
            return {
              ...token,
              role: token.role,
              error: 'AccessTokenError',
            };
          } else {
            return {
              ...token,
              role: token.role,
              access_token: res.data.data.access_token,
              error: undefined,
            };
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    async session({ session, token }) {
      if (token) {
        session.error = token.error;
        session.access_token = token.access_token;
        return session;
      }
      return session;
    },
  },
  debug: false,
  pages: {
    signIn: '/login',
    signOut: '/auth/signout',
  },
});
