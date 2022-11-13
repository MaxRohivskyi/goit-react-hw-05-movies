import { useState, useEffect } from 'react';
import { fetchCastsById } from 'servises/themoviedb-api';
import { NotificationError } from 'components/Notification/Notification';

export const useFetchCast = id => {
  const [cast, setCast] = useState(null);
  
  useEffect(() => {
    async function fetch() {
      try {
        const cast = await fetchCastsById(id);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
        NotificationError();
      }
    }
    fetch();
  }, [id]);

  return cast;
};
