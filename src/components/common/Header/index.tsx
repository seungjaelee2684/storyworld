import { useEffect, useRef, useState } from 'react'
import { ButtonWrapper, HeaderInlineContainer, HeaderLayout, HeaderLogo, HeaderRightWrapper, LoginText, LogoImage } from './style';
import ButtonComponent from '../../ui/atoms/ButtonComponent';
import { getCookies } from '../../../utils/getCookies';
import SearchBar from '../../ui/atoms/SearchBar';
// import { useLocation } from 'react-router-dom';
import { LibraryBig, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logos/storyworld_logo.webp';

const Header = () => {

  // const path = useLocation().pathname;
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const loginValue = getCookies('stw-lg');

  const [isLogin, setIsLogin] = useState<boolean>(!!loginValue);
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

  useEffect(() => {
    if (loginValue) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    };
  }, [loginValue]);

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderInlineContainer>
        <HeaderLogo href='/'>
          <LogoImage src={Logo} alt='로고' />
        </HeaderLogo>
        <HeaderRightWrapper>
          <SearchBar
            name='search'
            value={search}
            onChange={searchChangeHandle}
            onSubmit={searchSubmitHandle} />
          {(isLogin)
            ? <ButtonWrapper>
              <LoginText title='스토리 보기' href='/stories'>
                <LibraryBig size={24} />
              </LoginText>
              <LoginText href='/dashboard'>
                <User size={24} />
              </LoginText>
              <LoginText onClick={logoutHandle}>
                <LogOut size={24} />
              </LoginText>
            </ButtonWrapper>
            : <ButtonWrapper>
              <LoginText title='스토리 보기' href='/stories'>
                <LibraryBig size={24} />
              </LoginText>
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