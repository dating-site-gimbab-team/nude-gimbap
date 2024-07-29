/** @type {import('next').NextConfig} */
import withInterceptStdout from 'next-intercept-stdout';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withInterceptStdout(
  withBundleAnalyzer({
    // 여기를 reactStrictMode: true를 하게 되면 react-beautiful-dnd 라이브러리에서 draggableId 부분에 에러가 발생함.
    // [참고](https://github.com/atlassian/react-beautiful-dnd/issues/2407)
    reactStrictMode: false,
    swcMinify: true, // minification을 위해서 next.js 컴파일러를 사용하는 설정
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: [],
    },
  }),
  (text) => (text.includes('Duplicate atom key') ? '' : text),
);
