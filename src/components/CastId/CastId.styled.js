import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  padding-top: 20px;
`;
export const Item = styled.li`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Image = styled.img`
  height: 250px;
  box-shadow: 1px 1px 3px ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Name = styled.p`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
