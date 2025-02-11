import { PageSubTitle, PageTitleContainer, PageTitleWrapper, TitleContainer } from "./style";

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
      <TitleContainer>
        <PageTitleWrapper>{title}</PageTitleWrapper>
        {(sub) && <PageSubTitle>{sub}</PageSubTitle>}
      </TitleContainer>
      {(object) && object}
    </PageTitleContainer>
  )
};

export default PageTitle;