import { ChevronLeft } from "lucide-react";
import { BackLink, Cube, ErrorContainer, ErrorSubTitle, ErrorTitle, Face, Scene } from "./style";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Scene>
        <Cube>
          <Face $face="front">Error</Face>
          <Face $face="back">404</Face>
          <Face $face="left">Error</Face>
          <Face $face="right">404</Face>
          <Face $face="top">Error</Face>
          <Face $face="bottom">404</Face>
        </Cube>
      </Scene>
      <ErrorTitle>404 ERROR</ErrorTitle>
      <ErrorSubTitle>
        존재하지 않는 페이지이거나, 잘못된 주소 경로입니다.
        <br />
        다시 시도해주세요.
      </ErrorSubTitle>
      <BackLink href='/'>
        <ChevronLeft size={24} />
        Go Home
      </BackLink>
    </ErrorContainer>
  )
};

export default ErrorPage;