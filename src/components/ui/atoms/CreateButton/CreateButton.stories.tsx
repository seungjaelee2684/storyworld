import { Meta, StoryFn } from "@storybook/react";
import CreateButton from "./index";

export default {
    title: "Components/Atoms/CreateButton", // story 이름
    component: CreateButton,
    argTypes: {
        fullWidth: { control: 'boolean' }
    }
} as Meta<typeof CreateButton>;

const Template: StoryFn<typeof CreateButton> = (args: any) => (
    <CreateButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    fullWidth: false,
}; // Default의 props 지정