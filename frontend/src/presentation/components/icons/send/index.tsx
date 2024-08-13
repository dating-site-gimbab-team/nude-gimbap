import type { IcSendProps } from './types';

export function IcSend(props: IcSendProps): JSX.Element {
  const { width, height, stroke, ...rest } = {
    width: 24,
    height: 24,
    stroke: '#fff',
    ...props,
  };

  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 18.6667L18.6667 28L28 4M13.3333 18.6667L4 13.3333L28 4M13.3333 18.6667L28 4"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
