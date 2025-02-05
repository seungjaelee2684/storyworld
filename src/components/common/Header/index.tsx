import { useRef, useState } from 'react'
import { HeaderInlineContainer, HeaderLayout, HeaderLogo, HeaderRightWrapper, NavButton, NavigateWrapper } from './style';
import ButtonComponent from '../../ui/ButtonComponent';

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
          <ButtonComponent
            label='Sign Up'
            href='/signup'
            size='medium' />
        </HeaderRightWrapper>
      </HeaderInlineContainer>
    </HeaderLayout>
  )
};

export default Header;