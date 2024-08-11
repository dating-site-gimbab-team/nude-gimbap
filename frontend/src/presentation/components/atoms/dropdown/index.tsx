import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';
import type { DropdownProps } from './types';

// NOTE: react-select 는 ssr 오류 발생시킴 - Warning: Prop className did not match. Server
const DynamicCustomSelector = dynamic(() => import('./custom_selector'), {
    ssr: false,
});

export function Dropdown(props: DropdownProps): JSX.Element {
    const { formControl, ...otherProps } = props;

    if (formControl) {
        return (
            <Controller
                name={formControl.name}
                control={formControl.control}
                rules={formControl.rules}
                render={({ field: { ...field } }): JSX.Element => {
                    return <DynamicCustomSelector {...otherProps} {...field} />;
                }}
            />
        );
    }
    return <DynamicCustomSelector {...otherProps} />;
}
