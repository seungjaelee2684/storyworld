import styled from "styled-components";

const type: { [key: string]: string } = {
  both: `space-between`,
  start: `start`,
  end: `end`
};

export const BetweenLaneContainer = styled.div<{
  $type: string,
}>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => type[props.$type]};
  align-items: center;
  gap: 16px;
`;