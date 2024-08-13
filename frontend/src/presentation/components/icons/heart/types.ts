import type { SVGAttributes } from 'react';

export type IcHeartProps = {
  isFill?: boolean;
  width?: number;
  height?: number;
  color?: string;
} & SVGAttributes<SVGElement>;
