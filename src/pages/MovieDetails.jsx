import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Toast } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';
import { Movie } from 'components/Movie/Movie';
import { AdittionalInfo } from 'components/AdittionalInfo/AdittionalInfo';

export default function MovieDetails() {
  const [btnLabel, setBtnLabel] = useState('');
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const { movie, status } = useFetchMovie(movieId);
  const location = useLocation();
  const navigate = useNavigate();

  const onBackHandle = () => {
    location?.state?.from?.location
      ? navigate(location.state.from.location)
      : navigate('/');
  };

  useEffect(() => {
    if (location.state?.from?.label) {
      setBtnLabel(location.state.from.label);
    }
  }, [location.state]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <Movie movie={movie} label={btnLabel} onBackClick={onBackHandle} />
          <AdittionalInfo />
        </>
      )}
      {status === 'rejected' && <Toast />}
    </>
  );
}
