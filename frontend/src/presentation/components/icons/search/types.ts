import type { SVGAttributes } from 'react';

export type IcSearchProps = {
  isFill?: boolean;
  width?: number;
  height?: number;
  color?: string;
} & SVGAttributes<SVGElement>;
