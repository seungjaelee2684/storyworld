import { MainBackground, MainContentContainer, MainLayoutContainer } from './style';
import ThemeButton from '../ThemeButton';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeSelector } from '../../../store/Theme';
import { themeBackgrounds } from '../../../modules/themes';

const MainLayout = () => {

  const path = window.location.pathname;
  const theme = useRecoilValue(themeSelector);

  return (
    <MainLayoutContainer $src={themeBackgrounds[theme]?.image}>
      <MainBackground $start={path === '/'} />
      <MainContentContainer $start={path === '/'}>
        <ThemeButton />
        <Outlet />
      </MainContentContainer>
    </MainLayoutContainer>
  )
};

export default MainLayout;