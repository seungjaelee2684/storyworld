import ImageBox from "../../atoms/ImageBox";
import { CardBox, CardContainer, CardSubTitle, CardTitle, CardTitleWrapper, CardWriter } from "./style";
import CardImg from "../../../../assets/images/background.webp";

interface CardProps {
  type?: string;
  fullWidth?: boolean;
  href?: string;
  title?: string;
  sub?: string;
  writer?: string;
  image?: string;
};

const Card = ({
  type = 'story',
  fullWidth = false,
  href,
  title,
  sub,
  writer,
  image,
}: CardProps) => {
  return (
    <CardContainer
      $isstory={(type === 'story')}
      $full={fullWidth}>
      <CardBox href={href}>
        <ImageBox 
          size={(type === 'story') ? 'extralarge' : 'medium'}
          rounded={(type !== 'story')}
          src={(image) ? image : CardImg}
          alt='프로필 이미지' />
        <CardTitleWrapper>
          <CardSubTitle>.{sub}</CardSubTitle>
          <CardTitle>{title}</CardTitle>
          <CardWriter>{writer}</CardWriter>
        </CardTitleWrapper>
      </CardBox>
    </CardContainer>
  )
};

export default Card;