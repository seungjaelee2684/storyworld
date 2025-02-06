import ButtonComponent from "../../atoms/ButtonComponent";
import DynamicInput from "../../atoms/DynamicInput";
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
      <DynamicInput fullWidth label='ID or E-mail' size='large' />
      <DynamicInput fullWidth type="password" label='Password' size='large' />
      <ButtonComponent label='Login' fullWidth size='large' />
    </LoginFormContainer>
  )
};

export default LoginForm;