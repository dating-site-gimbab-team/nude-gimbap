import type { SVGAttributes } from 'react';

export type IcFaceTearfulProps = {
  isFill?: boolean;
  width?: number;
  height?: number;
  color?: string;
} & SVGAttributes<SVGElement>;
