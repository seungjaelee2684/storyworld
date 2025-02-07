import { Meta, StoryFn } from "@storybook/react";
import LoginForm from "./index";

export default {
    title: "Components/Organisms/LoginForm", // story 이름
    component: LoginForm,
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args: any) => (
    <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정