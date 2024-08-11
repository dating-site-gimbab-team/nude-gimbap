import { css } from 'styled-components';
import { breakPoints } from '../../theme';
import { ZIndexes } from '../../variables';

const generateBottomSheetStyles = (
  hasPadding: boolean,
  additionalStyles: Record<string, any> = {},
) =>
  css({
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    margin: 0,
    padding: hasPadding ? '40px 20px 20px 20px' : '0',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: ZIndexes.BOTTOM_SHEET,
    ...additionalStyles,

    [`@media (min-width: ${breakPoints.mobileLandscape})`]: {
      right: 'calc((100vw - 720px) / 2)',
    },
    [`@media (min-width: ${breakPoints.tablet})`]: {
      width: 412,
      right: 'calc((100vw - 940px) / 2)',
    },
    [`@media (min-width: ${breakPoints.desktopS})`]: {
      right: 'calc((100vw - 1140px) / 2)',
    },
    [`@media (min-width: ${breakPoints.desktopM})`]: {
      right: 'calc((100vw - 1320px) / 2)',
    },
    [`@media (min-width: ${breakPoints.desktopL})`]: {
      width: 496,
      right: 'calc((100vw - 1719px) / 2)',
    },
  });

export const reactResponsiveModal = css({
  '.react-responsive-modal-modal': {
    borderRadius: 10,
    padding: '0',
  },

  '.responsive-bottom-sheet': generateBottomSheetStyles(true),
  '.responsive-bottom-sheet-full': generateBottomSheetStyles(false),

  '.responsive-bottom-sheet-close': {
    padding: '8px 16px 8px 8px',
    zIndex: ZIndexes.BOTTOM_SHEET_CONTENT,
  },
  '@keyframes customEnterModalAnimation': {
    '0%': {
      transform: 'translateY(100%)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
  '@keyframes customLeaveModalAnimation': {
    '0%': {
      transform: 'translateY(0)',
    },
    '100%': {
      transform: 'translateY(100%)',
    },
  },

  // 모달
  '.custom_modal_close_button': {
    top: 18,
  },
});
