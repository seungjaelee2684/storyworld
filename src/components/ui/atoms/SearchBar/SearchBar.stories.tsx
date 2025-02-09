import { Meta, StoryFn } from "@storybook/react";
import SearchBar from "./index";

export default {
  title: "Components/Atoms/SearchBar",
  component: SearchBar,
} as Meta<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args: any) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정