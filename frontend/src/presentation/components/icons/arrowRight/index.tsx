import type { IcArrowRightProps } from './types';

export function IcArrowRight(props: IcArrowRightProps): JSX.Element {
  const { width, height } = {
    width: 24,
    height: 24,
    ...props,
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83333 3.33333L11.1667 8.11852L5.83333 12.8148"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
