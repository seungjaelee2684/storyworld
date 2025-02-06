import { Meta, StoryFn } from "@storybook/react";
import SubTitle from "./index";

export default {
    title: "Components/Atoms/SubTitle",
    component: SubTitle,
    argTypes: {
        fullWidth: { control: 'boolean' }
    }
} as Meta<typeof SubTitle>;

const Template: StoryFn<typeof SubTitle> = (args: any) => (
    <SubTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
    fullWidth: true
};