import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export type CheckButtonProps = {
    containerClassname?: string;
    label?: string;
    register?: UseFormRegisterReturn<any>;
} & InputHTMLAttributes<HTMLInputElement>;
