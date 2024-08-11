import { css } from 'styled-components';
import { colors } from '../theme';

export const predefinedColors = css`
  .text {
    &-primary {
      color: ${colors.primary[6]} !important;
    }

    &-error {
      color: ${colors.error[6]} !important;
    }

    &-warning {
      color: ${colors.warning[6]} !important;
    }

    &-success {
      color: ${colors.success[6]} !important;
    }

    &-info {
      color: ${colors.info[6]} !important;
    }

    &-neutral-4 {
      color: ${colors.neutral[4]} !important;
    }

    &-neutral-6 {
      color: ${colors.neutral[6]} !important;
    }
  }

  .border {
    &-error {
      border: 1.5px ${colors.error[6]} solid;
    }

    &-success {
      border: 1.5px ${colors.success[6]} solid;
    }
  }
`;
