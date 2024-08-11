import type { HtmlHTMLAttributes } from 'react';

export type ChipProps = {
    title: number | string;
} & HtmlHTMLAttributes<HTMLDivElement>;
