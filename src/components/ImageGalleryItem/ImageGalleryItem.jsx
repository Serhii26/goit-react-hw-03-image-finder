import { ItemLi, ItemImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImmageGalleryItem = ({ images, onClick }) => {
  return images.map((image, i) => {
    return (
      
        <ItemLi
          key={i}
          onClick={() => {
            onClick(image.largeImageURL);
          }}
        >
          <ItemImg src={image.webformatURL} alt={image.tags} />
        </ItemLi>
      
    );
  });
};

ImmageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
