import { useState } from 'react'
import { ButtonWrapper, LoginForm, LoginInput, LoginInputWrapper, LoginLabel, MainContainer, SignupButtonWrapper, Title } from './style';
import { Button } from '@mui/material';
import { getCookies } from '../../utils/getCookies';

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

  const mainRender = () => {
    if (cookie) {
      return (
        <MainContainer>
          <Title>Story World</Title>
          <Button
            style={{ width: '320px' }}
            size='large'
            variant='contained'
            fullWidth
            href='/mystory'>
            나의 스토리 시작하기
          </Button>
        </MainContainer>
      )
    } else {
      return (
        <MainContainer>
          <Title>Story World</Title>
          <LoginForm onSubmit={loginSubmitHandler}>
            <LoginInputWrapper>
              <LoginLabel>ID</LoginLabel>
              <LoginInput
                type='text'
                autoComplete='off'
                name='id'
                value={id}
                placeholder='아이디를 입력해주세요.'
                onChange={loginHandler} />
            </LoginInputWrapper>
            <LoginInputWrapper>
              <LoginLabel>Password</LoginLabel>
              <LoginInput
                type='password'
                autoComplete='off'
                name='password'
                value={password}
                placeholder='비밀번호를 입력해주세요.'
                onChange={loginHandler} />
            </LoginInputWrapper>
            <ButtonWrapper>
              <Button
                variant='contained'
                fullWidth
                type='submit'>
                로그인
              </Button>
              <SignupButtonWrapper>
                회원이 아니시라면?
                <Button variant='text' size='small'>
                  회원가입
                </Button>
              </SignupButtonWrapper>
            </ButtonWrapper>
          </LoginForm>
        </MainContainer>
      )
    };
  };

  return (
    mainRender()
  )
};

export default MainPage;