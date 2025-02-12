import { Meta, StoryFn } from "@storybook/react";
import NameRecommandModal from "./index";

export default {
  title: "Components/Atoms/NameRecommandModal", // story 이름
  component: NameRecommandModal,
} as Meta<typeof NameRecommandModal>;

const Template: StoryFn<typeof NameRecommandModal> = (args: any) => {
  return <NameRecommandModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정