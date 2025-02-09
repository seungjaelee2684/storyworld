import { Meta, StoryFn } from "@storybook/react";
import PostEditor from "./index";

export default {
  title: "Components/Modules/PostEditor"
} as Meta<typeof PostEditor>;

const Template: StoryFn<typeof PostEditor> = (args: any) => (
  <PostEditor {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정