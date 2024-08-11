import styled from 'styled-components';

export const RadioContainer = styled.div`
  > input {
    display: none;
  }

  > label {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.neutral[2]};
    padding: 14px;
    padding-left: 40px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    height: auto;
    transition: border-color 0.3s ease;
    text-align: center;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 22px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1.2px solid ${({ theme }) => theme.colors.neutral[2]};
      transition:
        background-color 0.3s ease,
        border-color 0.3s ease;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 47%;
      transform: translate(-50%, -50%);
      left: 22px;
      width: 4px;
      height: 8px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      opacity: 0;
      transform: translate(-50%, -50%) rotate(43deg);
      transition:
        opacity 0.3s ease,
        border-color 0.3s ease;
    }
  }

  > input:checked + label {
    border: 1.2px solid ${({ theme }) => theme.colors.primary[6]};

    &::before {
      background-color: ${({ theme }) => theme.colors.primary[6]};
      border-color: transparent;
    }

    &::after {
      opacity: 1;
    }
  }
`;
