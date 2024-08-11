import { RadioContainer } from './styles';
import type { RadioButtonProps } from './types';

export function RadioButton(props: RadioButtonProps): JSX.Element {
    const { containerClassName, label, register, ...otherProps } = props;

    return (
        <RadioContainer className={containerClassName}>
            <input type="radio" {...otherProps} {...register} />
            {label && <span>{label}</span>}
        </RadioContainer>
    );
}
