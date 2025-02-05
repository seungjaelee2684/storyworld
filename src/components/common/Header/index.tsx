import { useRef, useState } from 'react'
import { ButtonWrapper, HeaderInlineContainer, HeaderLayout, HeaderLogo, HeaderRightWrapper, NavButton, NavigateWrapper } from './style';
import ButtonComponent from '../../ui/atoms/ButtonComponent';

const Header = () => {

  const headerRef = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderInlineContainer>
        <HeaderLogo>
          STORY WORLD
        </HeaderLogo>
        <HeaderRightWrapper>
          <NavigateWrapper>
            <NavButton href='/story'>
              Story
            </NavButton>
            <NavButton href='/character'>
              Character
            </NavButton>
          </NavigateWrapper>
          <ButtonWrapper>
            <ButtonComponent
              label='Login'
              href='/login'
              btnType='text' />
            <ButtonComponent
              label='Sign Up'
              href='/signup' />
          </ButtonWrapper>
        </HeaderRightWrapper>
      </HeaderInlineContainer>
    </HeaderLayout>
  )
};

export default Header;