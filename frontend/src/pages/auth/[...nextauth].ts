/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import { instance } from '@infrastructure/client';
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
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
      clientId: 'Iv23liNganHBQ9IMZq2W',
      clientSecret: '8ce5475eaefad738339858dc1ea3e3e84a32d84a'
    }),
    CredentialsProvider({
      id: 'domain-login',
      type: 'credentials',
      name: '계정 이름',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: '사용자 이름',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '비밀번호',
        },
        accessToken: {
          label: 'accessToken',
          type: 'text',
          placeholder: '토큰',
        },
      },
      async authorize(credentials, req) {
        try {
          const res = await instance.post(ApiEndpoints.LOGIN, {
            username: credentials?.username,
            password: credentials?.password,
            access_token: credentials?.accessToken,
          });
          const user = await res.data.data.user;
          if (res.data.code === 200 && res.data) {
            user.name = user.nickname;
            user.email = user.username;
            return {
              ...user,
              role: user.role,
              access_token: res.data.data.access_token,
            };
          } else {
            return null;
          }
        } catch (e: any) {
          throw new Error(e.response.data.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
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
  pages: {
    signIn: '/login',
    signOut: '/auth/signout',
  },
});
