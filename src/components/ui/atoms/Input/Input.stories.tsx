import { Meta, StoryFn } from "@storybook/react";
import Input from "./index";

export default {
    title: "Components/Atoms/Input", // story 이름
    component: Input,
    argTypes: {
        fullWidth: { control: 'boolean' }
    }
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: any) => (
    <Input {...args} />
);

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    fullWidth: false,
}; // Small의 props 지정

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    fullWidth: false,
}; // Medium의 props 지정

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    fullWidth: false,
}; // Large의 props 지정