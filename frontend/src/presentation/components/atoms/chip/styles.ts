import styled from 'styled-components';
import { colors } from '@styles/theme';

export const ChipContaienr = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 8px',
  minWidth: 'fit-content',
  borderRadius: '99px',
  fontSize: '14px',
  backgroundColor: colors.primary[6],
  color: colors.neutral[1],
});
