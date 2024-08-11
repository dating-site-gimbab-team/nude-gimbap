import { CustomToastContent } from '@providers/toast/content';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import type { ToastCloseType } from '@providers/toast/content/types';

type ToastType = {
    showInfo: (
        message: string,
        title?: string,
        close?: boolean | ToastCloseType,
        icon?: JSX.Element
    ) => void;
    showSuccess: (
        message: string,
        title?: string,
        close?: boolean | ToastCloseType,
        icon?: JSX.Element
    ) => void;
    showError: (
        message: string,
        title?: string,
        close?: boolean | ToastCloseType,
        icon?: JSX.Element
    ) => void;
};

export function useToast(): ToastType {
    const showToast = useCallback(
        (
            type: 'info' | 'success' | 'error',
            message: string,
            title?: string,
            close?: boolean | ToastCloseType,
            icon?: JSX.Element
        ) => {
            toast[type](
                <CustomToastContent
                    title={title}
                    message={message}
                    close={close}
                />,
                { icon }
            );
        },
        []
    );

    const showInfo = useCallback(
        (
            message: string,
            title?: string,
            close?: boolean | ToastCloseType,
            icon?: JSX.Element
        ) => showToast('info', message, title, close, icon),
        []
    );

    const showSuccess = useCallback(
        (
            message: string,
            title?: string,
            close?: boolean | ToastCloseType,
            icon?: JSX.Element
        ) => showToast('success', message, title, close, icon),
        []
    );

    const showError = useCallback(
        (
            message: string,
            title?: string,
            close?: boolean | ToastCloseType,
            icon?: JSX.Element
        ) => showToast('error', message, title, close, icon),
        []
    );

    return { showInfo, showSuccess, showError };
}
