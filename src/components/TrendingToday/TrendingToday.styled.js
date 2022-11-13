import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingTodayWrapper = styled.main`
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0 0 20px 0;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  box-shadow: 1px 1px 3px ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    color: ${p => p.theme.colors.accent};

    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 1px 1px 3px ${p => p.theme.colors.accent};
    text-decoration: underline;
  }
`;

export const Poster = styled.div`
  width: 300px;
  height: 450px;
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const MoviesTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 100px;
`;
