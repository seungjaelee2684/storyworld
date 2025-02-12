import { Meta, StoryFn } from "@storybook/react";
import CharacterCard from "./index";

export default {
  title: "Components/Modules/CharacterCard",
  component: CharacterCard
} as Meta<typeof CharacterCard>;

const Template: StoryFn<typeof CharacterCard> = (args: any) => (
  <CharacterCard {...args} />
);

export const Default = Template.bind({});
Default.args = {

}; // Default의 props 지정