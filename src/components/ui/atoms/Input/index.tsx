import { useState } from "react";
import { InputContainer, InputStyle } from "./style";
import { Eye, EyeOff } from "lucide-react";
import { PasswordIcon } from "../../modules/InputLane/style";

interface InputProps {
  size?: string;
  fullWidth?: boolean;
  type?: string;
  name?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
};

const Input = ({
  size = 'medium',
  fullWidth = false,
  type = 'text',
  name,
  value,
  placeholder = '입력해주세요.',
  onChange,
}: InputProps) => {

  const [focus, setFocus] = useState<boolean>(false);
  const [isView, setIsView] = useState<string>(type);

  return (
    <InputContainer
      $size={size}
      $full={fullWidth}
      $focus={focus}>
      <InputStyle
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={(type === 'password') ? isView : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} />
      {(type === 'password')
        && <PasswordIcon>
          {(isView === 'password')
            ? <EyeOff size={16} onClick={() => setIsView('text')} />
            : <Eye size={16} onClick={() => setIsView('password')} />}
        </PasswordIcon>}
    </InputContainer>
  )
};

export default Input;