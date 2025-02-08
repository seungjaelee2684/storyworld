import { Meta, StoryFn } from "@storybook/react";
import BetweenLane from "./index";

export default {
  title: "Components/Atoms/BetweenLane",
  component: BetweenLane,
  argTypes: {
    state: { control: 'boolean' },
  }
} as Meta<typeof BetweenLane>;

const Template: StoryFn<typeof BetweenLane> = (args: any) => (
  <BetweenLane {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'left'
}; // Default의 props 지정