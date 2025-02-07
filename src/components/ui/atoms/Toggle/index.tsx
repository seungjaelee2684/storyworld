import { ToggleButton, ToggleSwitch } from "./style";

interface ToggleProps {
  state: boolean;
  action: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle = ({
  state,
  action
}: ToggleProps) => {
  return (
    <ToggleButton $toggle={state} onClick={() => action(!state)}>
      <ToggleSwitch $toggle={state} />
    </ToggleButton>
  )
};

export default Toggle;