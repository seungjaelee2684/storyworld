import { useState } from "react";
import { DynamicInputContainer, DynamicInputLabel, DynamicInputStyle } from "./style";
import { Eye, EyeOff } from "lucide-react";
import { PasswordIcon } from "../../modules/InputLane/style";

interface DynamicInputProps {
  size?: string;
  fullWidth?: boolean;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: any;
  label?: string;
  onChange?: (e: any) => void;
};

const DynamicInput = ({
  size = 'medium',
  fullWidth = false,
  placeholder = '입력해주세요.',
  type = 'text',
  name,
  value,
  label,
  onChange,
}: DynamicInputProps) => {

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isView, setIsView] = useState<string>(type);

  return (
    <DynamicInputContainer
      $size={size}
      $full={fullWidth}
      $focus={isFocus}>
      <DynamicInputStyle
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        $label={label}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange} />
      <DynamicInputLabel $size={size}>
        {label}
      </DynamicInputLabel>
      {(type === 'password')
        && <PasswordIcon>
          {(isView === 'password')
            ? <EyeOff size={16} onClick={() => setIsView('text')} />
            : <Eye size={16} onClick={() => setIsView('password')} />}
        </PasswordIcon>}
    </DynamicInputContainer>
  )
};

export default DynamicInput;