import React from 'react'
import { ButtonStyle } from './style';

interface ButtonComponentProps {
  size?: string;
  btnType?: string;
  color?: string;
  label: string;
};

const ButtonComponent = ({
  size = "medium",
  btnType = "fill",
  color = "#d1b536",
  label
}: ButtonComponentProps) => {
  return (
    <ButtonStyle
      $size={size}
      $btntype={btnType}
      $color={color}>
      {label}
    </ButtonStyle>
  )
};

export default ButtonComponent;