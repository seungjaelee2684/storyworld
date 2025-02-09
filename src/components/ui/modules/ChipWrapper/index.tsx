import { ChipLaneContainer } from "./style";

interface ChipWrapperProps {
  children?: React.ReactNode;
};

const ChipWrapper = ({
  children,
  ...props
}: ChipWrapperProps) => {
  return (
    <ChipLaneContainer {...props}>
      {children}
    </ChipLaneContainer>
  )
};

export default ChipWrapper;