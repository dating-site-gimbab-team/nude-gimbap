/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withInterceptStdout(
  withBundleAnalyzer({
    reactStrictMode: false,
    swcMinify: true, // minification을 위해서 next.js 컴파일러를 사용하는 설정
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: [
      ],
    },
  }),
  (text) => (text.includes('Duplicate atom key') ? '' : text)
);