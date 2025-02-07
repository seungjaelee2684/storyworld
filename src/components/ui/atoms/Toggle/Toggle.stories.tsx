import { Meta, StoryFn } from "@storybook/react";
import Toggle from "./index";

export default {
  title: "Components/Atoms/Toggle",
  component: Toggle,
  argTypes: {
    state: { control: 'boolean' },
  }
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args: any) => (
  <Toggle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  
}; // Default의 props 지정