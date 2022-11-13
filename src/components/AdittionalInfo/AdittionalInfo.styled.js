import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Info = styled.div`
  padding: 20px;
  margin: 30px 0 0 0;

  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
`;
export const Detail = styled(NavLink)`
  display: flex;
  margin: 0 0 0 10px;

  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  &:nth-child(2) {
    margin-bottom: 10px;
  }
  &.active {
    color: ${p => p.theme.colors.accent};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
export const Title = styled.h2`
  margin: 0 0 30px 10px;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: underline;
`;
