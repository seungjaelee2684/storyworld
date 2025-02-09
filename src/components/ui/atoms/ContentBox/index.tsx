import { ContentContainer } from "./style";

interface ContentBoxProps {
  children?: React.ReactNode;
};

const ContentBox = ({
  children,
  ...props
}: ContentBoxProps) => {
  return (
    <ContentContainer {...props}>
      {children}
    </ContentContainer>
  )
};

export default ContentBox;