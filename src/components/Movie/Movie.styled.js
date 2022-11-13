import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';

export const Btn = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 8px 16px;
  margin: 0 0 15px 0;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};

    background-color: ${p => p.theme.colors.accent};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 1px 1px 3px ${p => p.theme.colors.accent};
  }
`;

export const YouTybeImg = styled.img`
  position: absolute;
  top: 50%;
  right: 82%;
  width: 100px;

  transform: translate(50%, -50%);
  cursor: pointer;
`;

export const GoBack = styled(HiArrowLeft)`
  margin: 0 5px 0 0;
`;

export const FilmContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 0 20px 0;
`;

export const FilmDescription = styled.div`
  padding: 20px;
  margin: 0 0 0 10px;
  width: calc(100% - 310px);

  box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Poster = styled.img`
  width: 18vw;

  box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
`;

export const Title = styled.h2`
  margin: 0 0 20px 0;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: underline;
`;

export const SubTitle = styled.h3`
  margin: 40px 0 20px 0;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const GenresList = styled.span`
  display: flex;
  flex-direction: column;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
