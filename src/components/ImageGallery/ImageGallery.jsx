import { GalleryUl } from './ImageGallery.styled';
import { ImmageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { PropTypes } from 'prop-types';
export const ImageGallery = ({ images, onClick }) => {
  return (
    <GalleryUl>
      <ImmageGalleryItem onClick={onClick} images={images}  />
    </GalleryUl>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
