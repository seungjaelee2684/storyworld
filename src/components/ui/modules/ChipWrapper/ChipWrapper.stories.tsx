import { Meta, StoryFn } from "@storybook/react";
import ChipWrapper from "./index";

export default {
  title: "Components/Modules/ChipWrapper",
  component: ChipWrapper
} as Meta<typeof ChipWrapper>;

const Template: StoryFn<typeof ChipWrapper> = (args: any) => (
  <ChipWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정