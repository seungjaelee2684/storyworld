import { MainBanner, MainBannerImage, MainBannerText, MainContainer, StoryListContainer } from './style';
import BannerImg from '../../assets/images/illust.webp';
import TitleLaneComponent from '../../components/ui/atoms/TitleLaneComponent';
import CreateButton from '../../components/ui/atoms/CreateButton';

const MainPage = () => {

  // const cookie = getCookies('sb-lg');

  return (
    <MainContainer>
      <MainBanner>
        <MainBannerText>
          Make your own world come true
        </MainBannerText>
        <MainBannerImage src={BannerImg} alt='배너 이미지' />
      </MainBanner>
      <StoryListContainer>
        <TitleLaneComponent
          title='Stories'
          more='/stories' />
        <CreateButton
          href='/stories/upload'
          fullWidth />
      </StoryListContainer>
    </MainContainer>
  )
};

export default MainPage;