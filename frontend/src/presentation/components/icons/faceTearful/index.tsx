import type { IcFaceTearfulProps } from './types';

export function IcFaceTearful(props: IcFaceTearfulProps): JSX.Element {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.75 10.5C9.16421 10.5 9.5 10.1642 9.5 9.75C9.5 9.33579 9.16421 9 8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5ZM16 9.75C16 10.1642 15.6642 10.5 15.25 10.5C14.8358 10.5 14.5 10.1642 14.5 9.75C14.5 9.33579 14.8358 9 15.25 9C15.6642 9 16 9.33579 16 9.75ZM14.5281 15.5829C14.85 15.8435 15.3223 15.7939 15.5829 15.4719C15.8435 15.15 15.7939 14.6777 15.4719 14.4171C15.0056 14.0396 14.4579 13.7465 13.8642 13.5486C13.2704 13.3507 12.637 13.25 12 13.25C11.363 13.25 10.7296 13.3507 10.1358 13.5486C9.5421 13.7465 8.99438 14.0396 8.52807 14.4171C8.20614 14.6777 8.15645 15.15 8.41709 15.4719C8.67774 15.7939 9.15 15.8435 9.47193 15.5829C9.78773 15.3272 10.1735 15.1172 10.6101 14.9717C11.0466 14.8262 11.5195 14.75 12 14.75C12.4805 14.75 12.9534 14.8262 13.3899 14.9717C13.8265 15.1172 14.2123 15.3272 14.5281 15.5829Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8.5" stroke={color} />
      <circle cx="8.75" cy="9.75" r="0.75" fill={color} />
      <circle cx="15.25" cy="9.75" r="0.75" fill={color} />
      <path
        d="M15 15C14.6089 14.6834 14.1422 14.4319 13.627 14.2602C13.1119 14.0884 12.5588 14 12 14C11.4412 14 10.8881 14.0884 10.373 14.2602C9.85782 14.4319 9.39105 14.6834 9 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
