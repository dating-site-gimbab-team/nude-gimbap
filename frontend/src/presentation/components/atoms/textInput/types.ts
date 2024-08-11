import type { InputHTMLAttributes } from 'react';
import type { Control, RegisterOptions } from 'react-hook-form';
import type { UseFormRegisterReturn } from 'react-hook-form';

export type TextInputProps = {
    containerClassName?: string;
    label?: string;
    formControl?: {
        name: string;
        control: Control<any, any>;
        rules?: Omit<
            RegisterOptions<any, string>,
            'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
        >;
    };
    help?: {
        type: 'default' | 'success' | 'error';
        message: string;
    };
    accessoryRight?: JSX.Element;
    register?: UseFormRegisterReturn<any>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputContainerProps = {
    $disabled: boolean;
    $active: boolean;
};
