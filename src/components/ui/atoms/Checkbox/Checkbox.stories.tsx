import { Meta, StoryFn } from "@storybook/react";
import Chip from "./index";

export default {
  title: "Components/Atoms/Chip",
  component: Chip
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args: any) => (
  <Chip {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정