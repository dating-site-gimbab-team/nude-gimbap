import { ContainerWrapper } from './styles';
import type { ContainerProps } from './types';

export function Container(props: ContainerProps): JSX.Element {
    const { children, ...rest } = props;

    return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
}
