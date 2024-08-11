import styled from 'styled-components';
import { breakPoints } from '@styles/theme';

export const ContainerWrapper = styled.div({
  width: '100%',
  margin: '0 auto',
  overflowX: 'hidden',

  [`@media (min-width: ${breakPoints.mobileLandscape})`]: {
    width: 720,
  },
  [`@media (min-width: ${breakPoints.tablet})`]: {
    width: 940,
  },
  [`@media (min-width: ${breakPoints.desktopS})`]: {
    width: 1140,
  },
  [`@media (min-width: ${breakPoints.desktopM})`]: {
    width: 1320,
  },
  [`@media (min-width: ${breakPoints.desktopL})`]: {
    width: 1720,
  },
});
