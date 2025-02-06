import { TextAreaContainer } from "./style";

interface TextareaProps {
  size?: string;
  fullWidth?: boolean;
  placeholder?: string;
  name?: string;
  value?: any;
  onChange?: (e: any) => void;
};

const Textarea = ({
  size = 'medium',
  fullWidth = false,
  placeholder = '입력해주세요.',
  name,
  value,
  onChange,
}: TextareaProps) => {
  return (
    <TextAreaContainer
      $size={size}
      $full={fullWidth}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange} />
  )
};

export default Textarea;