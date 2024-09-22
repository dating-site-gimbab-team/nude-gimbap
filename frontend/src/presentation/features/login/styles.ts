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
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '> button': {
    borderRadius: '12px',
    backgroundColor: colors.github,
    color: 'white',
    fontSize: '14px',
    lineHeight: '20px',
    marginBottom: '8px',
    height: 42,
  },
});
