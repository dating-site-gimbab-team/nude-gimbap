import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { colors } from './theme';
import {
  APP_LAYOUT_PADDING,
  BOTTOM_NAVIGATION_BAR_HEIGHT,
  P_HEADER_PADDING_TOP,
  ZIndexes,
} from './variables';
import { reactResponsiveModal } from './vendors/reactResponsiveModal/styles';
import { reactSelect } from './vendors/reactSelect/styles';

type GlobalStyleProps = {
  viewportHeight: string;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${reset}
  ${reactResponsiveModal}
  ${reactSelect}

  :root {
    --vh: ${(props) => props.viewportHeight};
  }

  body {
    overflow-x: hidden;
  }

  body, input, button, select, textarea {
    font-size: 16px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    color: ${colors.neutral[8]};
  }

  h4 {
    font-size: 27px;
    font-weight: 600;
  }

  h5 {
    font-size: 23px;
    font-weight: 600;
  }

  h6 {
    font-size: 20px;
    font-weight: 600;
  }

  input {
    &::placeholder {
      color: ${colors.neutral[6]};
    }
  }

  button {
    background-color: ${colors.primary[6]};
    border-radius: 10px;
    user-select: none;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  }

  .btn-primary {
    background-color: ${colors.primary[6]};
    border-radius: 10px;
  }

  .p-header {
    padding-top: ${P_HEADER_PADDING_TOP}px !important;
  }

  .p-bottom-navigation {
    padding-bottom: ${BOTTOM_NAVIGATION_BAR_HEIGHT}px !important;
  }

  .layout-container {
    padding: 0 ${APP_LAYOUT_PADDING}px !important;
  }

  .form-label {
    font-size: 13px;
    font-weight: 400;
    color: ${colors.neutral[6]};
  }

  .highlightActive {
    z-index: ${ZIndexes.HIGHLIGHT + 1} !important;
    background-color: #fff !important;
  }

  .highlight {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: ${ZIndexes.HIGHLIGHT} !important;
  }
`;

export default GlobalStyle;
