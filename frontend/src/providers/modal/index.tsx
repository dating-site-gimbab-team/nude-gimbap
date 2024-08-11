import type { ModalProviderProps } from './types';

export function ModalProvider(props: ModalProviderProps): JSX.Element {
    const { children } = props;

    return (
        <>
            {children}
        </>
    );
}