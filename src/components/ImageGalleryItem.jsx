import { ImageGalleryItemStyled } from "./StyledComponents/ImageGallery";
import { ImageGalleryItemImage } from "./StyledComponents/ImageGallery";


export const ImageGalleryItem = ({ image, onItemClick }) => {
  const handleClick = () => {
    onItemClick(image);
  };

  return (
    <ImageGalleryItemStyled onClick={handleClick}>
      <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
    </ImageGalleryItemStyled>
  );
};
