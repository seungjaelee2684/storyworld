import ImageBox from "../../atoms/ImageBox";
import { CardBox, CardContainer, CardSubTitle, CardTitle, CardTitleWrapper, CardWriter } from "./style";
import CardImg from "../../../../assets/images/background.webp";

interface StoryCardProps {
  fullWidth?: boolean;
  href?: string;
  title?: string;
  sub?: string;
  writer?: string;
  image?: string;
};

const StoryCard = ({
  fullWidth = false,
  href,
  title,
  sub,
  writer,
  image,
}: StoryCardProps) => {
  return (
    <CardContainer
      $full={fullWidth}>
      <CardBox href={href}>
        <ImageBox 
          size='extralarge'
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

export default StoryCard;