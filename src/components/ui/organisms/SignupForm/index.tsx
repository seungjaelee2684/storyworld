import ButtonComponent from "../../atoms/ButtonComponent";
import DynamicInput from "../../atoms/DynamicInput";
import { FormSubTitle, FormTitle, FormTitleWrapper } from "../LoginForm/style";
import { SignupFormContainer } from "./style";

interface SignupFormProps {

};

const SignupForm = ({

}: SignupFormProps) => {

  return (
    <SignupFormContainer>
      <FormTitleWrapper>
        <FormTitle>sign up</FormTitle>
        <FormSubTitle>
          Join Our Story World!
        </FormSubTitle>
      </FormTitleWrapper>
      <DynamicInput fullWidth label='ID or E-mail' size='large' />
      <DynamicInput fullWidth type="password" label='Password' size='large' />
      <DynamicInput fullWidth type="password" label='Currect Password' size='large' />
      <DynamicInput fullWidth label='Nickname' size='large' />
      <ButtonComponent label='Login' fullWidth size='large' />
    </SignupFormContainer>
  )
};

export default SignupForm;