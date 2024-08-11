import { Modal } from 'react-responsive-modal';
import type { ModalContainerProps } from './types';

export function ModalContainer(props: ModalContainerProps): JSX.Element {
    const { children, isOpen, onClose } = props;

    return (
        <Modal
            center
            open={isOpen}
            onClose={onClose}
            classNames={{
                modal: 'custom_modal',
                closeButton: 'custom_modal_close_button',
            }}
        >
            {children}
        </Modal>
    );
}
