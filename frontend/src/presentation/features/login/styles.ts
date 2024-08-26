import styled from 'styled-components';
import { colors } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${colors.neutral[2]};
  background: white;
  width: 360px;
  border-radius: 16px;
  padding: 32px;
`;

export const TitleText = styled.h2`
  margin-bottom: 32px;
`;

export const LoginFormContainer = styled.div({
  flex: 1,
  '> form': {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '> input': {
      border: `1px solid ${colors.neutral[2]}`,
      borderRadius: '12px',
      padding: '0 16px',
      marginBottom: '8px',
      fontSize: '14px',
      lineHeight: '20px',
      height: 42,
    },
    '> button': {
      borderRadius: '12px',
      backgroundColor: colors.primary[4],
      color: 'white',
      fontSize: '14px',
      lineHeight: '20px',
      marginBottom: '8px',
      height: 42,
    },
  },
});
