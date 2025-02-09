import { PageSubTitle, PageTitleContainer, PageTitleWrapper } from "./style";

interface PageTitleProps {
  title: string;
  sub?: string;
  between?: boolean;
  object?: React.ReactNode;
};

const PageTitle = ({
  title,
  sub,
  between = false,
  object,
}: PageTitleProps) => {
  return (
    <PageTitleContainer $between={between}>
      <PageTitleWrapper>{title}</PageTitleWrapper>
      {(sub) && <PageSubTitle>{sub}</PageSubTitle>}
      {(object) && object}
    </PageTitleContainer>
  )
};

export default PageTitle;