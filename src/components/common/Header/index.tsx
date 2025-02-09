import { useEffect, useRef, useState } from 'react'
import { ButtonWrapper, HeaderInlineContainer, HeaderLayout, HeaderLogo, HeaderRightWrapper, LoginText, NavButton, NavigateWrapper } from './style';
import ButtonComponent from '../../ui/atoms/ButtonComponent';
import { getCookies } from '../../../utils/getCookies';
import SearchBar from '../../ui/atoms/SearchBar';
// import { useLocation } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  // const path = useLocation().pathname;
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const loginValue = getCookies('stw-lg');

  const [isLogin, setIsLogin] = useState<boolean>(!!loginValue);
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const logoutHandle = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    document.cookie = "stw-lg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate('/');
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
    setIsLogin(!!loginValue);
  }, [loginValue]);

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderInlineContainer>
        <HeaderLogo href='/'>
          StoryWorld
        </HeaderLogo>
        <HeaderRightWrapper>
          <SearchBar
            name='search'
            value={search}
            onChange={searchChangeHandle}
            onSubmit={searchSubmitHandle} />
          <NavigateWrapper>
            <NavButton href='/stories'>
              Stories
            </NavButton>
          </NavigateWrapper>
          {(isLogin)
            ? <ButtonWrapper>
              <LoginText onClick={() => setOpen(!open)}>
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