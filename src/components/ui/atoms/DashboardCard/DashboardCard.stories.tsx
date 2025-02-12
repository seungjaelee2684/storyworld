import { Meta, StoryFn } from "@storybook/react";
import DashboardCard from "./index";

export default {
  title: "Components/Atoms/DashboardCard", // story 이름
  component: DashboardCard,
} as Meta<typeof DashboardCard>;

const Template: StoryFn<typeof DashboardCard> = (args: any) => {
  return <DashboardCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정