import PropTypes from 'prop-types';
import {
  TrendingTodayWrapper,
  List,
  Title,
  Poster,
  Movie,
  MovieLink,
  MoviesTitle,
} from './TrendingToday.styled';
import { createSlug } from 'servises/createSlug';
import image from '../../img/no-poster-available.jpg';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export const TrendingMovies = ({ movies, title, location, to }) => {
  const getLabel = () => {
    const labelText = to === '' ? 'BACK TO MOVIES' : 'BACK TO HOME';
    return labelText;
  };

  return (
    <TrendingTodayWrapper>
      {title && <Title>{title}</Title>}
      <List>
        {movies.map(movie => (
          <Movie key={movie.id}>
            <MovieLink
              to={`${to}${createSlug(`${movie.title} ${movie.id}`)}`}
              state={{ from: { location, label: getLabel() } }}
            >
              <Poster>
                {movie.poster_path ? (
                  <img
                    src={`${IMG_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img src={`${image}`} alt="no-poster-available" />
                )}
              </Poster>
              <MoviesTitle>{movie.title}</MoviesTitle>
            </MovieLink>
            {}
          </Movie>
        ))}
      </List>
    </TrendingTodayWrapper>
  );
};

TrendingMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string,
  location: PropTypes.object.isRequired,
  to: PropTypes.string,
};
