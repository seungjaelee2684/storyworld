import { useState } from "react";
import LoginForm from "../../components/ui/organisms/LoginForm";
import { LoginContainer } from "./style";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

  const navigate = useNavigate();

  const idValue = import.meta.env.VITE_LOGIN_ID || '';
  const pwValue = import.meta.env.VITE_LOGIN_PASSWORD || '';

  const [loginValue, setLoginValue] = useState<any>({
    id: '',
    pw: ''
  });
  const { id, pw } = loginValue;

  const loginHandle = (e: any) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value
    });
  };

  const loginSubmitHandle = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (id.length <= 0) return alert('아이디를 입력해주십시오.');
    if (pw.length <= 0) return alert('비밀번호를 입력해주십시오.');
    if ((idValue !== id) || (pwValue !== pw)) return alert('아이디 혹은 비밀번호가 일치하지 않습니다.'); 
    
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // 다음 날로 설정
      0, 0, 0
    );
    document.cookie = `stw-lg=${idValue}; expires=${midnight.toUTCString()}; path=/`;
    navigate(-1);
  };

  return (
    <LoginContainer>
      <LoginForm
        onSubmit={loginSubmitHandle}
        onChange={loginHandle}
        state={loginValue} />
    </LoginContainer>
  )
};

export default LoginPage;