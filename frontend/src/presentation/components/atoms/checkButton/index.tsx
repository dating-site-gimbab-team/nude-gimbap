import { RadioContainer } from './styles';
import type { CheckButtonProps } from './types';

export function CheckButton(props: CheckButtonProps): JSX.Element {
    const { containerClassname, label, register, ...otherProps } = props;

    return (
        <RadioContainer className={containerClassname}>
            <input type="checkbox" {...otherProps} {...register} />
            {label && <span>{label}</span>}
        </RadioContainer>
    );
}
