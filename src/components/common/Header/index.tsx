import { useEffect, useRef, useState } from 'react'
import { ButtonWrapper, HeaderInlineContainer, HeaderLayout, HeaderLogo, HeaderRightWrapper, LoginText, NavButton, NavigateWrapper } from './style';
import ButtonComponent from '../../ui/atoms/ButtonComponent';
import { getCookies } from '../../../utils/getCookies';

const Header = () => {

  const headerRef = useRef<HTMLDivElement>(null);
  const loginValue = getCookies('stw-lg');
  const [isLogin, setIsLogin] = useState<boolean>(!!loginValue);

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
          <NavigateWrapper>
            <NavButton href='/stories'>
              Stories
            </NavButton>
          </NavigateWrapper>
          {(isLogin)
            ? <LoginText>
              유승현 님
            </LoginText>
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