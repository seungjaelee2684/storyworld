import { Meta, StoryFn } from "@storybook/react";
import ToggleButton from "./index";

export default {
  title: "Components/Atoms/ToggleButton",
  component: ToggleButton,
  argTypes: {
    state: { control: 'boolean' },
  }
} as Meta<typeof ToggleButton>;

const Template: StoryFn<typeof ToggleButton> = (args: any) => (
  <ToggleButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  
}; // Default의 props 지정