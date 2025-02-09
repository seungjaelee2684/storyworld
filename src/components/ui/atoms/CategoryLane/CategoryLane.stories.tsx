import { Meta, StoryFn } from "@storybook/react";
import CategoryLane from "./index";

export default {
  title: "Components/Atoms/CategoryLane",
  component: CategoryLane
} as Meta<typeof CategoryLane>;

const Template: StoryFn<typeof CategoryLane> = (args: any) => (
  <CategoryLane {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정