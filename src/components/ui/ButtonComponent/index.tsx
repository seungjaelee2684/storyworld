import { ButtonStyle, ButtonLinkStyle } from './style';

interface ButtonComponentProps {
  size?: string;
  btnType?: string;
  color?: string;
  href?: string;
  label: string;
};

const ButtonComponent = ({
  size = "medium",
  btnType = "fill",
  color = "#197fe6",
  href,
  label
}: ButtonComponentProps) => {

  const buttonType = () => {
    if (href) {
      return (
        <ButtonLinkStyle
          $size={size}
          $btntype={btnType}
          href={href}
          $color={color}>
          {label}
        </ButtonLinkStyle>
      )
    } else {
      return (
        <ButtonStyle
          $size={size}
          $btntype={btnType}
          $color={color}>
          {label}
        </ButtonStyle>
      )
    };
  };

  return buttonType()
};

export default ButtonComponent;