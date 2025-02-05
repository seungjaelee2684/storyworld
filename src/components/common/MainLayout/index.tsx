import { MainContentContainer } from './style';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

  return (
    <MainContentContainer>
      <Outlet />
    </MainContentContainer>
  )
};

export default MainLayout;