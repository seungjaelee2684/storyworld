import { ToggleButtonBox } from "./style";

interface ToggleButtonProps {
  children?: React.ReactNode;
  label?: string;
  state?: boolean;
};

const ToggleButton = ({
  children,
  label,
  state = false
}: ToggleButtonProps) => {
  return (
    <ToggleButtonBox $toggle={state}>
      {label}
      {children}
    </ToggleButtonBox>
  )
};

export default ToggleButton;