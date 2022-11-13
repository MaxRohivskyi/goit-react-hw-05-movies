import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import { List, Item, Autor, Icon } from './Review.styled';
import { NotFound } from 'components/NotFound/NotFound';

export const Review = ({ reviews }) => {
  Scroll.animateScroll.scrollMore(500);
  return (
    <>
      {reviews.length === 0 ? (
        <NotFound />
      ) : (
        <List>
          {reviews.map(({ author, content }) => (
            <Item key={author}>
              <Autor>
                <Icon />
                Autor: {author}
              </Autor>
              {content}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

Review.propTypes = {
  reviews: PropTypes.array.isRequired,
};
