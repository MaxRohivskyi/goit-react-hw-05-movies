import { useState, useEffect } from 'react';
import { fetchReviewsById } from 'servises/themoviedb-api';
import { NotificationError } from 'components/Notification/Notification';

export const useFetchReviews = id => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const reviews = await fetchReviewsById(id);
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
        NotificationError();
      }
    }
    fetch();
  }, [id]);

  return reviews;
};
