import type { IcArrowUpProps } from './types';

export function IcArrowUp(props: IcArrowUpProps): JSX.Element {
  const { width, height, color } = {
    width: 24,
    height: 24,
    color: '#000',
    ...props,
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 16.1111L12.1778 8.11108L19.2222 16.1111"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
