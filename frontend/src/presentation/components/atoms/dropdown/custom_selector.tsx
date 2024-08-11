import { IcArrowDown } from '@presentation/components/icons/arrowDown';
import classNames from 'classnames';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import type { DropdownIndicatorProps } from 'react-select';
import Select, { components } from 'react-select';
import { HelperLabel } from './styles';
import type { CustomSelectorProps } from './types';

function CustomSelector(props: CustomSelectorProps): JSX.Element {
    const { containerClassName, label, help, menuPlacement, ...otherProps } =
        props;

    const DropdownIndicator = useCallback(
        (indicatorProps: DropdownIndicatorProps): JSX.Element => {
            return (
                <components.DropdownIndicator {...indicatorProps}>
                    <IcArrowDown />
                </components.DropdownIndicator>
            );
        },
        []
    );

    return (
        <div className={containerClassName}>
            {label && <p className="form-label pl-4">{label}</p>}
            <Select
                menuPosition="fixed"
                menuPlacement={menuPlacement}
                className="react-select-container"
                classNamePrefix="react-select"
                components={{ DropdownIndicator }}
                {...otherProps}
            />
            {help && (
                <HelperLabel
                    className={classNames({
                        'text-natural-40': help.type === 'default',
                        'text-success': help.type === 'success',
                        'text-error': help.type === 'error',
                    })}
                >
                    {help.message}
                </HelperLabel>
            )}
        </div>
    );
}

export default memo(CustomSelector, isEqual);
