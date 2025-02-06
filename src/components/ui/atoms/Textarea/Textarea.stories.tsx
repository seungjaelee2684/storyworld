import { Meta, StoryFn } from "@storybook/react";
import Textarea from "./index";

export default {
  title: "Components/Atoms/Textarea",
  component: Textarea,
  argTypes: {
    fullWidth: { control: "boolean" }
  }
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args: any) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fullWidth: false
};