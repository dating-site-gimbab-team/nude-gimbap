import type { IcLayersProps } from './types';

export function IcLayers(props: IcLayersProps): JSX.Element {
  const { width, height, color } = {
    width: 24,
    height: 24,
    color: '#fff',
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
        d="M21 12L12 16L3.00001 12M21 16L12 20L3 16M21 8L12 12L3.00001 8L12 4L21 8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
