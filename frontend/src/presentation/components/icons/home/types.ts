import type { SVGAttributes } from 'react';

export type IcHomeProps = {
  isFill?: boolean;
  width?: number;
  height?: number;
  color?: string;
} & SVGAttributes<SVGElement>;
