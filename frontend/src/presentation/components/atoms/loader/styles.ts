import styled, { keyframes } from 'styled-components';
import { colors } from '@styles/theme';

const load = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const Loading = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${colors.primary[6]};
  background: -moz-linear-gradient(
    left,
    ${colors.primary[6]} 10%,
    rgba(0, 184, 118, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${colors.primary[6]} 10%,
    rgba(0, 184, 118, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${colors.primary[6]} 10%,
    rgba(0, 184, 118, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${colors.primary[6]} 10%,
    rgba(0, 184, 118, 0) 42%
  );
  background: linear-gradient(
    to right,
    ${colors.primary[6]} 10%,
    rgba(0, 184, 118, 0) 42%
  );
  position: relative;
  -webkit-animation: ${load} 1.4s infinite linear;
  animation: ${load} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: ${colors.primary[6]};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &::after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
