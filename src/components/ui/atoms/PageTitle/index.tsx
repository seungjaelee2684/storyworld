import { PageSubTitle, PageTitleContainer, PageTitleWrapper } from "./style";

interface PageTitleProps {
    title: string;
    sub: string;
};

const PageTitle = ({
    title,
    sub
}: PageTitleProps) => {
  return (
    <PageTitleContainer>
        <PageTitleWrapper>{title}</PageTitleWrapper>
        <PageSubTitle>
            {sub}
        </PageSubTitle>
    </PageTitleContainer>
  )
};

export default PageTitle;