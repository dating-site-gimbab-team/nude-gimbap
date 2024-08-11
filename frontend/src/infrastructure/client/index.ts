/* eslint-disable no-param-reassign */
import qs from 'qs';
import axios from 'axios';
import { getSession } from 'next-auth/react';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    timeout: 10 * 1000, // 10s
    paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    },
});

instance.interceptors.request.use(
    async (config) => {
        // session 에 토큰정보 존재할시 자동으로 Header 에 JWT 삽입
        const session = await getSession();
        if (session?.access_token) {
            config.headers.Authorization = `Bearer ${session.access_token}`;
        }
        if (session?.refresh_token) {
            config.headers['X-token'] = `Bearer ${session?.refresh_token}`;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            (error.response?.status === 401 ||
                error.response?.status === 403) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            return instance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export { instance };
