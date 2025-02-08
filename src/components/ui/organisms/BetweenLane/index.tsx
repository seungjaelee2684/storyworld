import { BetweenLaneContainer } from "./style";

interface BetweenLaneProps {
  type?: string;
  first?: React.ReactNode;
  second?: React.ReactNode;
};

const BetweenLane = ({
  type = 'start',
  first,
  second
}: BetweenLaneProps) => {
  return (
    <BetweenLaneContainer $type={type}>
      {first}
      {second}
    </BetweenLaneContainer>
  )
};

export default BetweenLane;