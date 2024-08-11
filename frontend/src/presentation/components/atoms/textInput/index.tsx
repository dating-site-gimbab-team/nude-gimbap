import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { HelperLabel, InputContainer, Root } from './styles';
import type { TextInputProps } from './types';
import { Controller } from 'react-hook-form';

export function TextInput(props: TextInputProps): JSX.Element {
    const {
        accessoryRight,
        containerClassName,
        label,
        help,
        register,
        formControl,
        onChange,
        ...otherProps
    } = props;
    const [inputFoucs, setInputFocus] = useState<boolean>(false);

    const onBlur = useCallback((): void => {
        setInputFocus(false);
    }, []);

    const onInputFocus = useCallback((): void => {
        setInputFocus(true);
    }, []);

    return (
        <Root className={containerClassName}>
            {label && <p className="form-label pl-4 pb-6">{label}</p>}
            {formControl ? (
                <Controller
                    name={formControl.name}
                    control={formControl.control}
                    rules={formControl.rules}
                    render={(): JSX.Element => {
                        return (
                            <InputContainer
                                className={classNames({
                                    'border-success': help?.type === 'success',
                                    'border-error': help?.type === 'error',
                                })}
                                $active={inputFoucs}
                                $disabled={otherProps.disabled!}
                            >
                                {onChange ? (
                                    <input
                                        {...otherProps}
                                        {...register}
                                        onChange={onChange}
                                        onFocus={onInputFocus}
                                        onBlur={onBlur}
                                    />
                                ) : (
                                    <input
                                        {...otherProps}
                                        {...register}
                                        onFocus={onInputFocus}
                                        onBlur={onBlur}
                                    />
                                )}

                                {accessoryRight && accessoryRight}
                            </InputContainer>
                        );
                    }}
                />
            ) : (
                <InputContainer
                    className={classNames({
                        'border-success': help?.type === 'success',
                        'border-error': help?.type === 'error',
                    })}
                    $active={inputFoucs}
                    $disabled={otherProps.disabled!}
                >
                    <input
                        {...register}
                        {...otherProps}
                        onChange={onChange}
                        onFocus={onInputFocus}
                        onBlur={onBlur}
                    />
                    {accessoryRight && accessoryRight}
                </InputContainer>
            )}

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
        </Root>
    );
}
