import { useCallback, useMemo } from 'react';
import { CloseButton, ContentContainer, CustomCloseButton } from './styles';
import type { ToastCloseType } from './types';

type CustomToastContentProps = {
  message: string;
  title?: string;
  close?: boolean | ToastCloseType;
  onCloseClick?: () => void;
} & {
  closeToast?: () => void;
};

export function CustomToastContent(
  props: CustomToastContentProps
): JSX.Element {
  const { close, closeToast, message, onCloseClick: closeClick, title } = props;

  const onCloseClick = useCallback((): void => {
    if (closeToast) {
      closeToast();
    }
    if (closeClick) {
      closeClick();
    }
  }, []);

  const renderCloseButton = useMemo((): JSX.Element | null => {
    if (!close) {
      return null;
    }
    if (typeof close === 'boolean' && close === true) {
      return (
        <CloseButton
          role="presentation"
          className="closeButton"
          alt="ic_close"
          src="/icons/ic_close.svg"
          onClick={onCloseClick}
        />
      );
    }

    return (
      <CustomCloseButton type="button" onClick={close.onClick}>
        {close.label}
      </CustomCloseButton>
    );
  }, [close]);

  return (
    <ContentContainer>
      <div>
        {title && <p>{title}</p>}
        <p>{message}</p>
      </div>
      {renderCloseButton}
    </ContentContainer>
  );
}
