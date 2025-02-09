import { Meta, StoryFn } from "@storybook/react";
import LinkModal from ".";

export default {
  title: "Components/Atoms/LinkModal"
} as Meta<typeof LinkModal>;

const Template: StoryFn<typeof LinkModal> = (args: any) => (
  <LinkModal {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정