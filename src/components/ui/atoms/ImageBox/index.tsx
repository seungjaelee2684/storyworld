import { ImageContainer, ImageWrapper } from "./style";

interface ImageBoxProps {
  src: string;
  alt?: string;
  size?: string;
  rounded?: boolean;
};

const ImageBox = ({
  src,
  alt,
  size = 'medium',
  rounded = false,
}: ImageBoxProps) => {
  return (
    <ImageContainer
      $size={size}
      $rounded={rounded}>
      <ImageWrapper
        src={src}
        alt={alt} />
    </ImageContainer>
  )
};

export default ImageBox;