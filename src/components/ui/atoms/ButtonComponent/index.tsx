import { ButtonStyle, ButtonLinkStyle } from './style';

interface ButtonComponentProps {
  size?: string;
  btnType?: string;
  href?: string;
  type?: "button" | "reset" | "submit" | undefined;
  label: string;
  fullWidth?: boolean;
  onClick?: (e: any) => void;
};

const ButtonComponent = ({
  size = "medium",
  btnType = "fill",
  href,
  type,
  label,
  fullWidth = false,
  onClick,
}: ButtonComponentProps) => {

  const buttonClickHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const buttonType = () => {
    if (href) {
      return (
        <ButtonLinkStyle
          $size={size}
          $btntype={btnType}
          href={href}
          type={type}
          $full={fullWidth}
          onClick={onClick}>
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
          onClick={onClick}>
          {label}
        </ButtonStyle>
      )
    };
  };

  return buttonType()
};

export default ButtonComponent;