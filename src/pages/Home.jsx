import { useLocation } from 'react-router-dom';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { TrendingMovies } from 'components/TrendingToday/TrendingToday';
import { Loader } from 'components/Loader/Loader';
import { NotFound } from 'components/NotFound/NotFound';

export default function Home() {
  const { movies, status } = useFetchMovies();
  const location = useLocation();

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <TrendingMovies
          location={location}
          movies={movies}
          title="Trendind today"
          to="movies/"
        />
      )}
      {status === 'rejected' && <NotFound />}
    </>
  );
}
