import { Meta, StoryFn } from "@storybook/react";
import ContentBox from "./index";

export default {
  title: "Components/Atoms/ContentBox",
  component: ContentBox
} as Meta<typeof ContentBox>;

const Template: StoryFn<typeof ContentBox> = (args: any) => (
  <ContentBox {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정