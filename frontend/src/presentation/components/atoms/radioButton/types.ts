import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export type RadioButtonProps = {
    containerClassName?: string;
    label: string;
    register?: UseFormRegisterReturn<any>;
} & InputHTMLAttributes<HTMLInputElement>;
