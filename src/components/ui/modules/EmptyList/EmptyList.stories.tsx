import { Meta, StoryFn } from "@storybook/react";
import EmptyList from "./index";

export default {
    title: "Components/Modules/EmptyList",
} as Meta<typeof EmptyList>;

const Template: StoryFn<typeof EmptyList> = (args: any) => (
    <EmptyList {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정