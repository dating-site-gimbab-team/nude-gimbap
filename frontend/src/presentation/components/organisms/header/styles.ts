import {
  APP_LAYOUT_PADDING,
  MOBILE_HEADER_HEIGHT,
  ZIndexes,
} from '@styles/variables';
import { colors } from '@styles/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: MOBILE_HEADER_HEIGHT,
  padding: `0 ${APP_LAYOUT_PADDING}px`,
  backgroundColor: 'transparent',
  zIndex: ZIndexes.MOBILE_HEADER,
  '.logo': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  '.nav': {
    flex: 1.5,
    display: 'flex',
    justifyContent: 'flex-end',
    '> a': {
      width: 128,
      height: 42,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.neutral[6],
      fontWeight: 600,
      fontSize: 18,
      cursor: 'pointer',
    },
    '.active': {
      color: colors.primary[6],
    },
  },
});

export const ButtonHeaderProfile = styled.button`
  background: ${({ theme }) => theme.colors.primary[6]};
  padding: 6px 24px;
  border-radius: 5px;
  font-size: 15px;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileLandscape}) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const HomeButton = styled.button`
  background-color: transparent;
`;
