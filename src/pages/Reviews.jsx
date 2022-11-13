import { useParams } from 'react-router-dom';
import { useFetchReviews } from 'hooks/useFetchReviews';
import { Review } from 'components/Review/Review';

export default function Reviews() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const reviews = useFetchReviews(movieId);

  return <>{reviews && <Review reviews={reviews} />}</>;
}
