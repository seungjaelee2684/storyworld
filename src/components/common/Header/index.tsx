import React, { useEffect, useRef, useState } from 'react'
import { HeaderInlineContainer, HeaderLayout } from './style';
import { Button } from '@mui/material';

const Header = () => {

  const headerRef = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderInlineContainer>
      </HeaderInlineContainer>
    </HeaderLayout>
  )
};

export default Header;