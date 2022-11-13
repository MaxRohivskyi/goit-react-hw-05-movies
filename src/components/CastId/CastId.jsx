import { NotFound } from 'components/NotFound/NotFound';
import * as Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import { List, Item, Name, Image } from './CastId.styled';
import image from '../../img/no-poster-available.jpg';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export const CastId = ({ cast }) => {
  Scroll.animateScroll.scrollMore(500);

  return (
    <>
      {cast.cast.length === 0 ? (
        <NotFound />
      ) : (
        <List>
          {cast.cast.map(({ name, character, profile_path }) => (
            <Item key={name}>
              {profile_path ? (
                <Image src={`${IMG_BASE_URL}${profile_path}`} alt={name} />
              ) : (
                <Image src={`${image}`} alt="no-poster-available" />
              )}
              <Name>{name}</Name>
              <p>{character}</p>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

CastId.propTypes = {
  cast: PropTypes.shape({
    cast: PropTypes.array.isRequired,
  }),
};
