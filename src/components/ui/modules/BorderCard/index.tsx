import ImageBox from "../../atoms/ImageBox";
import { CardBox, CardContainer, CardSubTitle, CardTitle, CardTitleWrapper, TopLane } from "./style";
import CardImg from "../../../../assets/images/background.webp";

interface BorderCardProps {
  fullWidth?: boolean;
  href?: string;
  title?: string;
  sub?: string;
  image?: string;
  icon?: React.ReactNode;
};

const BorderCard = ({
  fullWidth = false,
  href,
  title,
  sub,
  image,
  icon,
}: BorderCardProps) => {
  return (
    <CardContainer
      $full={fullWidth}>
      <CardBox href={href}>
        <TopLane>
          <ImageBox
            size='medium'
            rounded
            src={(image) ? image : CardImg}
            alt='프로필 이미지' />
          {icon}
        </TopLane>
        <CardTitleWrapper>
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{sub}</CardSubTitle>
        </CardTitleWrapper>
      </CardBox>
    </CardContainer>
  )
};

export default BorderCard;