import ImageBox from "../../atoms/ImageBox";
import { CharacterCheckBox, CharacterCheckInput } from "./style";

interface CharacterCheckProps {
  type?: string;
  name?: string;
  value?: string;
  image?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
};

const CharacterCheck = ({
  type = 'checkbox',
  name,
  value,
  image = '',
  checked = false,
  onChange,
  style,
  ...props
}: CharacterCheckProps) => {
  return (
    <CharacterCheckBox
      $checked={checked}
      style={style}
      {...props}>
      <CharacterCheckInput
        type={type}
        name={name}
        value={value}
        onChange={onChange} />
      <ImageBox size='large' src={image} alt='캐릭터' />
      {value}
    </CharacterCheckBox>
  )
};

export default CharacterCheck;