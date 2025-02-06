import { Meta, StoryFn } from "@storybook/react";
import SignupForm from "./index";

export default {
    title: "Components/Organisms/SignupForm", // story 이름
    component: SignupForm,
} as Meta<typeof SignupForm>;

const Template: StoryFn<typeof SignupForm> = (args: any) => (
    <SignupForm {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정