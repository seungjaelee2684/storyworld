import { CheckboxButton, CheckboxContainer } from "./style";

interface CheckboxProps {
  name?: string;
  value?: string;
  selected?: boolean;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
};

const Checkbox = ({
  name,
  value,
  selected = false,
  onChange,
  style,
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxContainer
      $selected={selected}
      style={style}
      {...props}>
      <CheckboxButton
        type='checkbox'
        name={name}
        value={value}
        onChange={onChange} />
      {value}
    </CheckboxContainer>
  )
};

export default Checkbox;