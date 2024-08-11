import { css } from 'styled-components';
import { colors, surface } from '../../theme';

export const reactSelect = css`
  .react-select__menu {
    background-color: #fff !important;
    border-radius: 8px !important;
    box-shadow: 0px 6px 12px rgba(28, 39, 49, 0.05);
    margin-top: 24px;

    & > .react-select__menu-list {
      padding: 0;
      overflow-y: overlay;
      border-radius: 8px;

      &::-webkit-scrollbar {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        width: 10px;
        height: 20px;
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: #e8eaf3 !important;
        border-radius: 8px;
      }

      & > .react-select__option {
        border-bottom: none !important;
        background-color: #fff;
      }
    }
  }

  .react-select__control {
    border: none !important;
    border-radius: 8px !important;
    background: ${surface.low} !important;
    height: 48px;
    padding-left: 16px;

    & > .react-select__value-container {
      padding: 0;

      & > .react-select__multi-value {
        background-color: #fff;
        border-radius: 35px;
        color: #637083;
        padding: 5px 8px;
        align-items: center;

        & > .react-select__multi-value__label {
          font-size: 14px;
          padding: 0;
          padding-right: 6px;
        }

        & > .react-select__multi-value__remove {
          justify-content: center;
          background-color: ${colors.neutral[6]} !important;
          width: 16px;
          height: 16px;
          border-radius: 100%;

          & > svg {
            fill: #fff;
            width: 14px;
            height: 14px;
            overflow: initial;
          }
        }
      }
    }
  }

  /*
    .react-select__value-container {
        padding: 0 !important;

        & > .react-select__control {
            background-color: #fff !important;
            border: 1px solid #ced2da !important;

            & > .react-select__value-container > .react-select__multi-value {
                background-color: #fff !important;
                border: 1px solid #ced2da;
                border-radius: 35px;

                & > .react-select__multi-value__label {
                    font-size: 14px;
                    font-weight: 500;
                    color: #637083;
                }
            }
        }

        & > .react-select__placeholder {
            font-weight: 400;
            font-size: 16px;
            color: ${colors.neutral[4]} !important;
        }

        & > .react-select__single-value {
            font-size: 16px;
        }
    }
    */

  .react-select__control--is-focused {
    border: 1px ${colors.primary[6]} solid !important;
    box-shadow: 0 0 0 1px ${colors.primary[6]} !important;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__option {
    border-bottom: 1px ${colors.neutral[4]} solid !important;
    padding: 12px 16px !important;
    color: ${colors.neutral[5]} !important;
  }

  .react-select__option--is-selected {
    background: ${colors.primary[6]} !important;
    color: #fff !important;
  }
`;
