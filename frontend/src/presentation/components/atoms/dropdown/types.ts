import type { Control, RegisterOptions } from 'react-hook-form';
import { type Props } from 'react-select';

export type DropdownItem = {
    label: string;
    value: string | number;
};

export type DropdownItemBoolean = {
    label: string;
    value: boolean;
};

export type DropdownItemNumber = {
    label: string;
    value: number;
};

export type DropdownItemType = {
    label: string;
    value: string;
    type: string;
};

export type DropdownProps = {
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
    menuPlacement?: 'top' | 'bottom';
} & Props;

export type CustomSelectorProps = {
    containerClassName?: string;
    label?: string;
    help?: {
        type: 'default' | 'success' | 'error';
        message: string;
    };
    menuPlacement?: 'top' | 'bottom';
} & Props;
