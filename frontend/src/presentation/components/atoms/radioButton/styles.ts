import styled from 'styled-components';

export const RadioContainer = styled.div`
  background-color: ${({ theme }) => theme.surface.low};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px 6px;

  > input {
    ${({ theme }) => theme.typo.bodyMedium};
    color: ${({ theme }) => theme.colors.neutral[4]};

    &:checked {
      color: ${({ theme }) => theme.colors.neutral[8]};
    }
  }

  > span {
    padding-left: 6px;
  }

  > input:checked {
    border: 1px ${({ theme }) => theme.colors.primary[6]} solid;
  }
`;
