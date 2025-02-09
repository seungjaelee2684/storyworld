import { RadioInput, RadioInputContainer, CustomRadio, RadioWrapper } from "./style";
import ImageBox from "../ImageBox";
import { genderData } from "../../../../modules/gender";

interface RadioProps {
  text?: string;
  type?: string;
  checked?: boolean;
  name?: string;
  value?: number;
  onChange?: (e: any) => void;
};

const Radio = ({
  text,
  type = 'radio',
  checked,
  name,
  value = 0,
  onChange,
}: RadioProps) => {
  return (
    <RadioInputContainer>
      <RadioInput
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange} />
      <CustomRadio />
      <RadioWrapper>
        <ImageBox src={genderData[value].image} alt="성별" size="large" />
        {text}
      </RadioWrapper>
    </RadioInputContainer>
  )
};

export default Radio;