import type { HtmlHTMLAttributes, ReactNode } from 'react';

export type ContainerProps = {
    children: ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;
