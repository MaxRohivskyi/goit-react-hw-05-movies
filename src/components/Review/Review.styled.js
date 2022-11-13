import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';

export const List = styled.ul`
  padding: 10px;
`;

export const Item = styled.li`
  padding: 30px;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.large};
  padding: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Autor = styled.h4`
  margin-bottom: 10px;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Icon = styled(BsFillPersonFill)`
  margin-right: 10px;
`;
