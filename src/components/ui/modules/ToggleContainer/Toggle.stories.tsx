import { Meta, StoryFn } from "@storybook/react";
import ToggleContainer from "./index";

export default {
  title: "Components/Atoms/ToggleContainer",
  component: ToggleContainer,
  argTypes: {
    state: { control: 'boolean' },
  }
} as Meta<typeof ToggleContainer>;

const Template: StoryFn<typeof ToggleContainer> = (args: any) => (
  <ToggleContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  
}; // Default의 props 지정