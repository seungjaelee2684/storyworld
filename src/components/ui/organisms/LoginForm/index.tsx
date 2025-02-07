import ButtonComponent from "../../atoms/ButtonComponent";
import DynamicInput from "../../atoms/DynamicInput";
import { FormSubTitle, FormTitle, FormTitleWrapper, LoginFormContainer } from "./style";

interface LoginFormProps {
  onSubmit?: (e: any) => void;
  onChange?: (e: any) => void;
  state?: any;
};

const LoginForm = ({
  onSubmit,
  onChange,
  state,
}: LoginFormProps) => {

  const { id, pw } = state;

  return (
    <LoginFormContainer onSubmit={onSubmit}>
      <FormTitleWrapper>
        <FormTitle>login</FormTitle>
        <FormSubTitle>
          Join Our Story World!
        </FormSubTitle>
      </FormTitleWrapper>
      <DynamicInput
        fullWidth
        label='ID or E-mail'
        size='large'
        name='id'
        value={id}
        onChange={onChange} />
      <DynamicInput
        fullWidth
        type="password"
        label='Password'
        size='large'
        name='pw'
        value={pw}
        onChange={onChange} />
      <ButtonComponent label='Login' fullWidth size='large' type='submit' />
    </LoginFormContainer>
  )
};

export default LoginForm;