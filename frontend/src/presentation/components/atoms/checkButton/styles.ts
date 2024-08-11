import styled from 'styled-components';
import { colors } from '@styles/theme';

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 6px;

  > input[type='checkbox'] {
    min-width: 24px;
    min-height: 24px;
  }

  > input[type='checkbox']:not(.switch) {
    border-radius: 0;
  }

  > input[type='checkbox']:checked {
    background-color: ${colors.primary[6]};
    filter: drop-shadow(2px 2px 4px rgba(85, 116, 242, 0.25));
  }

  > span {
    margin-left: 8px;
  }
`;
