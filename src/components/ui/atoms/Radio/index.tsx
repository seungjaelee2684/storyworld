import { RadioInput, RadioInputContainer, CustomRadio } from "./style";

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
      {text}
    </RadioInputContainer>
  )
};

export default Radio;