import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "./index";

export default {
  title: "Components/Atoms/Checkbox",
  component: Checkbox
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args: any) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정