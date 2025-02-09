import { CategoryContent, CategoryExpired, CategoryLaneContainer } from "./style";

interface CategoryLaneProps {
  expired?: string;
  content?: string;
  icon?: React.ReactNode;
};

const CategoryLane = ({
  expired,
  content,
  icon,
}: CategoryLaneProps) => {
  return (
    <CategoryLaneContainer>
      <CategoryExpired>{expired}</CategoryExpired>
      <CategoryContent>{content}{icon}</CategoryContent>
    </CategoryLaneContainer>
  )
};

export default CategoryLane;