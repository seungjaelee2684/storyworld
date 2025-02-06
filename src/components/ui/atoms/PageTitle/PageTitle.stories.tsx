import { Meta, StoryFn } from "@storybook/react";
import PageTitle from './index';

export default {
    title: "Components/Atoms/PageTitle",
} as Meta<typeof PageTitle>;

const Template: StoryFn<typeof PageTitle> = (args: any) => (
    <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정