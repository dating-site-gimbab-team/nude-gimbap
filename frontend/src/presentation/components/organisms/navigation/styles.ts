import { colors } from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.nav({
  width: '100%',
  display: 'flex',
  height: 64,
  justifyContent: 'space-between',
  backgroundColor: colors.neutral[0],
  '> a': {
    flex: 1,
    color: colors.neutral[6],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.active': {
      fontWeight: 600,
    },
  },
});
