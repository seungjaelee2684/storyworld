import ImageBox from "../../atoms/ImageBox";
import { CardBox, CardContainer, CardSubTitle, CardTitle, CardTitleWrapper } from "./style";
import CardImg from "../../../../assets/images/background.webp";

interface BorderCardProps {
  fullWidth?: boolean;
  href?: string;
  title?: string;
  sub?: string;
  image?: string;
};

const BorderCard = ({
  fullWidth = false,
  href,
  title,
  sub,
  image,
}: BorderCardProps) => {
  return (
    <CardContainer
      $full={fullWidth}>
      <CardBox href={href}>
        <ImageBox 
          size='medium'
          rounded
          src={(image) ? image : CardImg}
          alt='프로필 이미지' />
        <CardTitleWrapper>
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{sub}</CardSubTitle>
        </CardTitleWrapper>
      </CardBox>
    </CardContainer>
  )
};

export default BorderCard;