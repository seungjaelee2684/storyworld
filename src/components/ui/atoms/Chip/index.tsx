import { ChipContainer } from "./style";

interface ChipProps {
  size?: string;
  label?: string;
  style?: React.CSSProperties;
};

const Chip = ({
  size = 'medium',
  label,
  style,
  ...props
}: ChipProps) => {
  return (
    <ChipContainer
      $size={size}
      style={style}
      {...props}>
      {label}
    </ChipContainer>
  )
};

export default Chip;