// styles.ts
import { colors } from '@/presentation/styles/theme';
import styled from 'styled-components';

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100vh - 128px)',
  position: 'relative',
});

export const Card = styled.div`
  width: 300px;
  height: 312px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: absolute;
  transition: transform 0.3s, opacity 0.5s;

  &.fade-out {
    opacity: 0;
    transform: translateY(-20px);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primary[3]};
  }
`;
