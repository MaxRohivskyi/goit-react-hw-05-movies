import { useParams } from 'react-router-dom';
import { useFetchCast } from 'hooks/useFetchCast';
import { CastId } from 'components/CastId/CastId';

export default function Cast() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const cast = useFetchCast(movieId);

  return <>{cast && <CastId cast={cast} />}</>;
}
