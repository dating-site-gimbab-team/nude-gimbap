import { ChipContaienr } from './styles';
import type { ChipProps } from './types';

export default function Chip(props: ChipProps): JSX.Element {
    const { title, ...rest } = props;

    return <ChipContaienr {...rest}>{title}</ChipContaienr>;
}
