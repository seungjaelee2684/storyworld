import { Meta, StoryFn } from "@storybook/react";
import ButtonComponent from "./index";

export default {
    title: "Components/Button", // story 이름
    component: ButtonComponent,
} as Meta<typeof ButtonComponent>;

const Template: StoryFn<typeof ButtonComponent> = (args: any) => (
    <ButtonComponent {...args} />
);

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "small",
}; // Small의 props 지정

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "large",
}; // Large의 props 지정