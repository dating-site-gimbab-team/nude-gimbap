import type { IcHeartProps } from './types';

export function IcHeart(props: IcHeartProps): JSX.Element {
  const { width, height, color, isFill, ...rest } = {
    width: 24,
    height: 24,
    color: '#DDE1E6',
    isFill: false,
    ...props,
  };

  if (isFill) {
    return (
      <svg
        {...rest}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5355 5.46448C21.4881 7.4171 21.4881 10.5829 19.5355 12.5355L12.7071 19.364C12.3166 19.7545 11.6834 19.7545 11.2929 19.364L4.46447 12.5355C2.51184 10.5829 2.51184 7.4171 4.46447 5.46448C6.0168 3.91215 7.89056 3.43683 9.78125 4.35939C10.5317 4.72556 11.5156 5.46448 12 6.4297C12.4844 5.46448 13.4683 4.72556 14.2187 4.35939C16.1094 3.43683 17.9832 3.91215 19.5355 5.46448Z"
          stroke={color}
          strokeWidth="1.5"
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1061 8.2103C15.2757 8.54836 15.6216 8.76178 15.9998 8.76178C16.3781 8.76178 16.724 8.54836 16.8936 8.2103C17.4785 7.04474 18.7284 6.07985 19.7254 5.59336C20.9377 5.00183 22.1025 4.87408 23.1985 5.11498C24.3054 5.35826 25.411 5.99348 26.4565 7.03892C28.9587 9.54117 28.9587 13.5981 26.4565 16.1004L15.9998 26.557L5.54319 16.1004L4.83608 16.8075L5.54319 16.1004C3.04094 13.5981 3.04094 9.54117 5.54319 7.03892C6.58864 5.99348 7.69427 5.35826 8.80114 5.11498C9.89718 4.87408 11.062 5.00183 12.2743 5.59336C13.2713 6.07985 14.5211 7.04474 15.1061 8.2103Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
