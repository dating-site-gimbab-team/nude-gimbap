import type { IcArrowDownProps } from './types';

export function IcArrowDown(props: IcArrowDownProps): JSX.Element {
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
        d="M19.2222 8.11108L12.0445 16.1111L5.00001 8.11108"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
