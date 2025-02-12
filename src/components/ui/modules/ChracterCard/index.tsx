import ImageBox from "../../atoms/ImageBox";
import { CardText, CharacterCardBox, CharacterCardContainer } from "./style";

interface CharacterCardProps {
  href?: string;
  image?: string;
  characterName?: string;
  title?: string;
  style?: React.CSSProperties;
};

const CharacterCard = ({
  href,
  image = '',
  characterName,
  title,
  style,
  ...props
}: CharacterCardProps) => {
  return (
    <CharacterCardContainer title={title}>
      <CharacterCardBox
        href={href}
        style={style}
        {...props}>
        <ImageBox size='large' src={image} alt='캐릭터' />
        <CardText>{characterName}</CardText>
      </CharacterCardBox>
    </CharacterCardContainer>
  )
};

export default CharacterCard;