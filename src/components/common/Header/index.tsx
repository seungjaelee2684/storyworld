import { useRef, useState } from 'react'
import { ButtonWrapper, HeaderInlineContainer, HeaderLayout, HeaderLogo, HeaderRightWrapper, LoginText, LogoImage, SearchWrapper } from './style';
import ButtonComponent from '../../ui/atoms/ButtonComponent';
import SearchBar from '../../ui/atoms/SearchBar';
// import { useLocation } from 'react-router-dom';
import { BookMarked, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logos/storyworld_logo.webp';
import { useLoginAuth } from '../../../store/authStore';

const Header = () => {

  // const path = useLocation().pathname;
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);

  const { isLogin } = useLoginAuth();
  const [search, setSearch] = useState<string>('');

  const logoutHandle = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const isLogout = confirm('로그아웃 하시겠습니까?');

    if (isLogout) {
      document.cookie = "stw-lg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate('/');
    };
  };

  const searchChangeHandle = (e: any) => {
    const value = e.target.value;
    setSearch(value);
  };

  const searchSubmitHandle = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

  };

  // useEffect(() => {
  //   if (loginValue) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   };
  // }, [loginValue]);

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderInlineContainer>
        <HeaderLogo href='/'>
          <LogoImage src={Logo} alt='로고' />
        </HeaderLogo>
        <HeaderRightWrapper>
          <SearchWrapper>
            <SearchBar
              name='search'
              value={search}
              onChange={searchChangeHandle}
              onSubmit={searchSubmitHandle} />
            <LoginText title='스토리 보기' href='/stories'>
              <BookMarked size={24} />
            </LoginText>
          </SearchWrapper>
          {(isLogin)
            ? <ButtonWrapper>
              <LoginText href='/dashboard'>
                <User size={24} />
              </LoginText>
              <LoginText onClick={logoutHandle}>
                <LogOut size={24} />
              </LoginText>
            </ButtonWrapper>
            : <ButtonWrapper>
              <ButtonComponent
                label='Login'
                href='/login'
                btnType='text' />
              <ButtonComponent
                label='Sign Up'
                href='/signup' />
            </ButtonWrapper>}
        </HeaderRightWrapper>
      </HeaderInlineContainer>
    </HeaderLayout>
  )
};

export default Header;