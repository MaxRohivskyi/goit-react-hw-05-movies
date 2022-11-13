import { useState, createRef, useEffect } from 'react';
import { useFetchVideo } from 'hooks/useFetchVideo';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  FilmContainer,
  GoBack,
  Btn,
  FilmDescription,
  Poster,
  Title,
  SubTitle,
  Text,
  GenresList,
  YouTybeImg,
} from './Movie.styled';
import image from '../../img/no-poster-available.jpg';
import youTube from '../../img/youtube.png';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export const Movie = ({ movie, label, onBackClick }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { video, status } = useFetchVideo(movie.id);
  const ref = createRef();

  const openModal = () => {
    setModalOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (ref.current) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [ref]);

  const { title, poster_path, genres, overview, vote_average } = movie;

  return (
    <div>
      <Btn type="button" onClick={onBackClick}>
        {label ? label : 'BACK TO HOME'}
        <GoBack size="20" />
      </Btn>
      <FilmContainer onClick={openModal}>
        {poster_path ? (
          <Poster src={`${IMG_BASE_URL}${poster_path}`} alt={title} />
        ) : (
          <Poster src={`${image}`} alt="no-poster-available" />
        )}
        {status === 'resolved' && <YouTybeImg src={youTube} alt="youtube" />}

        <FilmDescription>
          <Title>{title}</Title>
          <Text>
            User score: <b>{vote_average}</b>
          </Text>
          <SubTitle>Overview</SubTitle>
          {overview !== '' ? <Text>{overview}</Text> : <Text>No overview</Text>}
          <SubTitle>Genres</SubTitle>
          {genres ? (
            genres.map(genre => (
              <GenresList key={genre.id}>{genre.name}</GenresList>
            ))
          ) : (
            <Text>No genre</Text>
          )}
        </FilmDescription>
      </FilmContainer>

      <Modal
        ref={ref}
        onClose={openModal}
        isModalOpen={modalOpen}
        trailer={video}
        status={status}
      />
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
