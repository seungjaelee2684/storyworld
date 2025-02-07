import { SubTitleContainer } from "./style";

interface SubTitleProps {
    fullWidth?: boolean;
};

const SubTitle = ({
    fullWidth = false
}: SubTitleProps) => {
  return (
    <SubTitleContainer
        $full={fullWidth}>

    </SubTitleContainer>
  )
};

export default SubTitle;