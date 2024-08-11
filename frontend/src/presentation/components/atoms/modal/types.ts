import type { ReactNode } from 'react';

export type ModalContainerProps = {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
};
