import { ImageContainer, ImageWrapper } from "./style";

interface ImageBoxProps {
  src: string;
  alt?: string;
  size?: string;
  rounded?: boolean;
  style?: React.CSSProperties;
};

const ImageBox = ({
  src,
  alt,
  size = 'medium',
  rounded = false,
  style,
  ...props
}: ImageBoxProps) => {
  return (
    <ImageContainer
      $size={size}
      $rounded={rounded}
      style={style}
      {...props}>
      <ImageWrapper
        src={src}
        alt={alt} />
    </ImageContainer>
  )
};

export default ImageBox;