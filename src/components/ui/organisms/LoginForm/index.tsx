import ButtonComponent from "../../atoms/ButtonComponent";
import Input from "../../atoms/Input";
import InputLane from "../../modules/InputLane";
import { FormSubTitle, FormTitle, FormTitleWrapper, LoginFormContainer } from "./style";

interface LoginFormProps {

};

const LoginForm = ({

}: LoginFormProps) => {
  return (
    <LoginFormContainer>
      <FormTitleWrapper>
        <FormTitle>login</FormTitle>
        <FormSubTitle>
          Join Our Story World!
        </FormSubTitle>
      </FormTitleWrapper>
      <InputLane label='ID'>
        <Input fullWidth size='large' />
      </InputLane>
      <InputLane label='PASSWORD'>
        <Input fullWidth size='large' type="password" />
      </InputLane>
      <ButtonComponent label='Login' fullWidth size='large' />
    </LoginFormContainer>
  )
};

export default LoginForm;