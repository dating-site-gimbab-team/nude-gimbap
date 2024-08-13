import type { SVGAttributes } from 'react';

export type IcProfileProps = {
  isFill?: boolean;
  width?: number;
  height?: number;
  color?: string;
} & SVGAttributes<SVGElement>;
