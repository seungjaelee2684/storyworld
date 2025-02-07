import { ButtonStyle, ButtonLinkStyle } from './style';

interface ButtonComponentProps {
  size?: string;
  btnType?: string;
  href?: string;
  type?: "button" | "reset" | "submit" | undefined;
  label: string;
  fullWidth?: boolean;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
};

const ButtonComponent = ({
  size = "medium",
  btnType = "fill",
  href,
  type,
  label,
  fullWidth = false,
  onClick,
  style,
}: ButtonComponentProps) => {

  const buttonType = () => {
    if (href) {
      return (
        <ButtonLinkStyle
          $size={size}
          $btntype={btnType}
          href={href}
          type={type}
          $full={fullWidth}
          onClick={onClick}
          style={style}>
          {label}
        </ButtonLinkStyle>
      )
    } else {
      return (
        <ButtonStyle
          $size={size}
          $btntype={btnType}
          type={type}
          $full={fullWidth}
          onClick={onClick}
          style={style}>
          {label}
        </ButtonStyle>
      )
    };
  };

  return buttonType()
};

export default ButtonComponent;