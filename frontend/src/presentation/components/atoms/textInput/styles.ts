import { css } from '@emotion/react';
import styled from 'styled-components';
import type { InputContainerProps } from './types';

export const Root = styled.div({
  '> p': {
    userSelect: 'none',
  },
});

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.surface.low};
  padding: 14px 18px;
  width: 100%;

  > input {
    width: 100%;
    background-color: ${({ theme }) => theme.surface.low};
    padding: 0;
    ${(props) => props.theme.typo.bodyLarge};
    color: #444 !important;

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral[5]};
      user-select: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.surface.low}
        inset;
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.surface.low} inset;
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #444 !important;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  ${(props) =>
    props.$disabled &&
    css`
      background-color: ${props.theme.colors.neutral[2]};

      > input {
        background-color: ${props.theme.colors.neutral[2]};
      }
    `}

  ${(props) =>
    props.$active &&
    css`
      border: 1px ${props.theme.colors.primary[4]} solid;
      box-shadow: 0px 0px 3px ${props.theme.colors.primary[6]};
    `}
`;

export const HelperLabel = styled.p`
  padding-top: 6px;
  font-size: 12px;
  font-weight: 400;
  ${(props) => props.theme.typo.bodySmall}
`;
