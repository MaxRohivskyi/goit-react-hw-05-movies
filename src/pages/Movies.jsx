import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useFetchMoviesByQuery } from 'hooks/useFetchMoviesByQuery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { TrendingMovies } from 'components/TrendingToday/TrendingToday';
import { Loader } from 'components/Loader/Loader';
import { NotFound } from 'components/NotFound/NotFound';

export default function Movies() {
  const { movies, status, onInputChange } = useFetchMoviesByQuery();
  const { slug } = useParams();
  const movieId = slug && slug.match(/[a-z0-9]+$/)[0];
  const location = useLocation();
  
  return (
    <>
      {!movieId && (
        <>
          <Searchbar onSubmit={onInputChange} />
          {status === 'pending' && <Loader />}
          {status === 'resolved' && (
            <TrendingMovies movies={movies} location={location} to={''} />
          )}
          {status === 'rejected' && <NotFound />}
        </>
      )}
      <Outlet />
    </>
  );
}
