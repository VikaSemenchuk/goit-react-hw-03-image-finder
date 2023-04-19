import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { GalleryList } from './Gallery.styled';

export const ImageGallery = ({ images }) => {
  console.log('images in gallery :>> ', images);
  return (
    <GalleryList>
      {images.map(el => (
        <ImageGalleryItem key={el.id} image={el} />
      ))}
    </GalleryList>
  );
};
