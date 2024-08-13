import type { IcSearchProps } from './types';

export function IcSearch(props: IcSearchProps): JSX.Element {
  const { width, height, color, isFill, ...rest } = {
    width: 24,
    height: 24,
    color: '#fff',
    isFill: false,
    ...props,
  };

  if (isFill) {
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
          d="M15.333 23C10.3622 23 6.33301 18.9708 6.33301 14C6.33301 9.02917 10.3622 5 15.333 5C20.3038 5 24.333 9.02917 24.333 14C24.333 18.9708 20.3038 23 15.333 23Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.8333 28.0001L21.835 22.0017"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.0001 52L42.5327 42.5326M42.5327 42.5326C45.9107 39.1546 48.0001 34.4879 48.0001 29.3333C48.0001 19.024 39.6427 10.6666 29.3334 10.6666C19.0241 10.6666 10.6667 19.024 10.6667 29.3333C10.6667 39.6426 19.0241 48 29.3334 48C34.4881 48 39.1547 45.9106 42.5327 42.5326Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
