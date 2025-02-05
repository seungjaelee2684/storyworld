import { useState } from 'react'
import { MainBanner, MainBannerImage, MainBannerText, MainContainer, StoryListContainer } from './style';
import { getCookies } from '../../utils/getCookies';
import BannerImg from '../../assets/images/background.webp';
import TitleLaneComponent from '../../components/ui/TitleLaneComponent';
import CreateButton from '../../components/ui/CreateButton';

const MainPage = () => {

  const localID = import.meta.env.VITE_LOGIN_ID || '';
  const localPassword = import.meta.env.VITE_LOGIN_PASSWORD || '';
  const cookie = getCookies('sb-lg');

  const [success, setSuccess] = useState<boolean>(false);
  const [loginValue, setLoginValue] = useState<{
    id: string,
    password: string
  }>({
    id: '',
    password: ''
  });
  const { id, password } = loginValue;

  const loginHandler = (e: any) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value
    });
  };

  const loginSubmitHandler = (e: any) => {
    e.preventDefault();

    if ((id !== localID) || (password !== localPassword)) return alert('로그인 정보가 틀립니다.');
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // 다음 날로 설정
      0, 0, 0
    );
    document.cookie = `sb-lg=${localID}; expires=${midnight.toUTCString()}; path=/`;
    setSuccess(!success);
  };

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
          more='/story' />
        <CreateButton
          href='/story/upload' />
      </StoryListContainer>
    </MainContainer>
  )
};

export default MainPage;