import styled from 'styled-components';
import { MdLocalMovies } from 'react-icons/md';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconLogo = styled(MdLocalMovies)`
  color: ${p => p.theme.colors.muted};
  margin: 0 10px 0 0;
`;

export const TextLogo = styled.p`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
