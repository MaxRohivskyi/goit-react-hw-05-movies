import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;

  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 1px 1px 3px ${p => p.theme.colors.muted};
  text-decoration: none;
  &:nth-child(2) {
    margin-left: 10px;
  }
  &.active {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.primary};

    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  }
`;
