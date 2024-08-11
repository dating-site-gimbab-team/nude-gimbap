import { css } from 'styled-components';
import { colors } from '../theme';

export const predefinedLayouts = css`
  input[type='checkbox'],
  input[type='radio'] {
    appearance: none;
    position: relative;
    transition:
      background 0.3s ease,
      border-color 0.3s ease;
    margin: 0;
    outline: none;
    border: 1px solid ${colors.neutral[3]};
    box-shadow: none;
    background: #fff;
    cursor: pointer;
    padding: 0;
    height: 24px;

    &::after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      transition:
        transform 0.3s ease,
        opacity 0.2s ease,
        filter 0.3s ease;
      content: '';
    }

    &:checked {
      border-color: ${colors.primary[6]};
      background: ${colors.primary[6]};

      &::after {
        transition:
          opacity 0.3s ease,
          filter 0.3s ease,
          transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);
      }
    }

    &:disabled {
      opacity: 0.9;
      background: ${colors.neutral[2]};
      cursor: not-allowed;

      &:checked {
        border-color: ${colors.neutral[3]};
        background: ${colors.neutral[3]};
      }
    }

    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          border-color: ${colors.primary[6]};
        }
      }
    }

    &:not(.switch) {
      width: 24px;

      &::after {
        opacity: 0;
      }

      &:checked {
        &::after {
          opacity: 1;
        }
      }
    }
  }

  input[type='checkbox'] {
    &:not(.switch) {
      border-radius: 50%;

      &::after {
        top: 4px;
        left: 7px;
        transform: rotate(20deg);
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        width: 5px;
        height: 9px;
      }

      &:checked {
        &::after {
          transform: rotate(43deg);
        }
      }
    }

    &.switch {
      border-radius: 12px;
      width: 44px;

      &::after {
        top: 3px;
        left: 4px;
        border-radius: 50%;
        background: ${colors.neutral[4]};
        width: 16px;
        height: 16px;
      }

      &:checked {
        &::after {
          transform: translateX(17px);
          background: #fff;
        }
      }

      &:disabled {
        &:not(:checked) {
          &::after {
            opacity: 0.6;
          }
        }
      }
    }
  }

  input[type='radio'] {
    &:not(.switch) {
      border-radius: 50%;

      &::after {
        top: 4px;
        left: 7px;
        transform: rotate(20deg);
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        width: 5px;
        height: 9px;
      }

      &:checked {
        &::after {
          transform: rotate(43deg);
        }
      }
    }

    &.switch {
      border-radius: 12px;
      width: 44px;

      &::after {
        top: 3px;
        left: 4px;
        border-radius: 50%;
        background: ${colors.neutral[4]};
        width: 16px;
        height: 16px;
      }

      &:checked {
        &::after {
          transform: translateX(17px);
          background: #fff;
        }
      }

      &:disabled {
        &:not(:checked) {
          &::after {
            opacity: 0.6;
          }
        }
      }
    }
  }

  .p {
    &-0 {
      padding: 0 !important;
    }
  }

  .pt {
    &-4 {
      padding-top: 4px !important;
    }

    &-6 {
      padding-top: 6px !important;
    }

    &-8 {
      padding-top: 8px !important;
    }

    &-12 {
      padding-top: 12px !important;
    }

    &-16 {
      padding-top: 16px !important;
    }

    &-20 {
      padding-top: 20px !important;
    }

    &-60 {
      padding-top: 60px !important;
    }
  }

  .pb {
    &-6 {
      padding-bottom: 4px;
    }

    &-6 {
      padding-bottom: 6px;
    }

    &-12 {
      padding-bottom: 12px;
    }

    &-24 {
      padding-bottom: 24px;
    }
  }

  .pl {
    &-2 {
      padding-left: 2px;
    }

    &-4 {
      padding-left: 4px;
    }

    &-6 {
      padding-left: 6px;
    }

    &-12 {
      padding-left: 12px;
    }

    &-20 {
      padding-left: 20px;
    }

    &-24 {
      padding-left: 24px;
    }
  }

  .pr {
    &-6 {
      padding-right: 6px !important;
    }

    &-12 {
      padding-right: 12px !important;
    }
  }

  .px {
    &-6 {
      padding-right: 6px !important;
      padding-left: 6px !important;
    }

    &-12 {
      padding-right: 12px !important;
      padding-left: 12px !important;
    }

    &-16 {
      padding-right: 16px !important;
      padding-left: 16px !important;
    }

    &-20 {
      padding-right: 20px !important;
      padding-left: 20px !important;
    }

    &-24 {
      padding-right: 24px !important ;
      padding-left: 24px !important;
    }
  }

  .py {
    &-12 {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }

    &-16 {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }

    &-20 {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }

    &-24 {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
    }
  }

  .m {
    &-10 {
      margin: 10px;
    }
  }

  .ml {
    &-6 {
      margin-left: 6px;
    }

    &-12 {
      margin-left: 12px;
    }

    &-20 {
      margin-left: 20px;
    }

    &-24 {
      margin-left: 24px;
    }

    &-28 {
      margin-left: 28px;
    }
  }

  .mr {
    &-4 {
      margin-right: 4px !important;
    }

    &-6 {
      margin-right: 6px !important;
    }

    &-8 {
      margin-right: 8px !important;
    }

    &-12 {
      margin-right: 12px !important;
    }
  }

  .mx {
    &-12 {
      margin: 0 12px;
    }

    &-16 {
      margin: 0 16px;
    }

    &-20 {
      margin: 0 20px;
    }

    &-24 {
      margin: 0 24px;
    }
  }

  .my {
    &-12 {
      margin: 12px 0;
    }

    &-16 {
      margin: 16px 0;
    }

    &-20 {
      margin: 20px 0;
    }

    &-24 {
      margin: 24px 0;
    }
  }

  .mt {
    &-4 {
      margin-top: 4px;
    }

    &-8 {
      margin-top: 8px;
    }

    &-12 {
      margin-top: 12px;
    }

    &-16 {
      margin-top: 16px;
    }

    &-24 {
      margin-top: 24px;
    }

    &-32 {
      margin-top: 32px;
    }

    &-40 {
      margin-top: 40px;
    }

    &-52 {
      margin-top: 52px;
    }

    &-60 {
      margin-top: 52px;
    }

    &-80 {
      margin-top: 80px;
    }
  }

  .mb {
    &-12 {
      margin-bottom: 12px !important;
    }

    &-20 {
      margin-bottom: 20px !important;
    }

    &-24 {
      margin-bottom: 24px !important;
    }

    &-28 {
      margin-bottom: 28px !important;
    }

    &-32 {
      margin-bottom: 32px !important;
    }

    &-38 {
      margin-bottom: 38px !important;
    }

    &-40 {
      margin-bottom: 40px !important;
    }

    &-60 {
      margin-bottom: 60px !important;
    }

    &-72 {
      margin-bottom: 72px !important;
    }

    &-80 {
      margin-bottom: 80px !important;
    }

    &-128 {
      margin-bottom: 128px !important;
    }
  }
`;
