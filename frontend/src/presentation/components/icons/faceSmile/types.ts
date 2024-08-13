import type { SVGAttributes } from 'react';

export type IcFaceSmileProps = {
  isFill?: boolean;
  width?: number;
  height?: number;
  color?: string;
} & SVGAttributes<SVGElement>;
