import { ToggleButtonBox, ToggleLane } from "./style";

interface ToggleContainerProps {
  children?: React.ReactNode;
  label?: string;
  state?: boolean;
};

const ToggleContainer = ({
  children,
  label,
  state = false
}: ToggleContainerProps) => {
  return (
    <ToggleLane>
      <ToggleButtonBox $toggle={state}>
        {label}
        {children}
      </ToggleButtonBox>
    </ToggleLane>
  )
};

export default ToggleContainer;