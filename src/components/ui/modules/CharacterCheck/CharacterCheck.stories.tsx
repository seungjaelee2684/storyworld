import { Meta, StoryFn } from "@storybook/react";
import CharacterCheck from "./index";

export default {
  title: "Components/Modules/CharacterCheck",
  component: CharacterCheck
} as Meta<typeof CharacterCheck>;

const Template: StoryFn<typeof CharacterCheck> = (args: any) => (
  <CharacterCheck {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정