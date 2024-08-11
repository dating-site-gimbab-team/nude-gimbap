import { RadioContainer } from './styles';
import type { CheckBorderButtonProps } from './types';

export function CheckBorderButton(props: CheckBorderButtonProps): JSX.Element {
    const { containerClassName, label, id, register, ...otherProps } = props;

    return (
        <RadioContainer className={containerClassName}>
            <input type="checkbox" {...otherProps} {...register} id={id} />
            {label && <label htmlFor={id}>{label}</label>}
        </RadioContainer>
    );
}
