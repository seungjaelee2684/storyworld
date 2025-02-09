import { Meta, StoryFn } from "@storybook/react";
import Radio from "./index";

export default {
  title: "Components/Atoms/Radio",
  component: Radio,
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args: any) => (
  <Radio {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정