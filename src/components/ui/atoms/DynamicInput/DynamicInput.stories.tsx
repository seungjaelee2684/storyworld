import { Meta, StoryFn } from "@storybook/react";
import DynamicInput from "./index";

export default {
    title: "Components/Atoms/DynamicInput",
    component: DynamicInput
} as Meta<typeof DynamicInput>;

const Template: StoryFn<typeof DynamicInput> = (args: any) => (
    <DynamicInput {...args} />
);

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    fullWidth: false,
    label: 'Password'
} // Small의 props 지정;

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    fullWidth: false,
    label: 'Password'
}; // Medium의 props 지정

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    fullWidth: false,
    label: 'Password'
}; // Large의 props 지정