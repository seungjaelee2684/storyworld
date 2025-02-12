import { Meta, StoryFn } from "@storybook/react";
import ImageRadio from "./index";

export default {
  title: "Components/Atoms/ImageRadio",
  component: ImageRadio,
} as Meta<typeof ImageRadio>;

const Template: StoryFn<typeof ImageRadio> = (args: any) => (
  <ImageRadio {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정