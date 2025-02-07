import { Meta, StoryFn } from "@storybook/react";
import StoryCard from "./index";

export default {
  title: "Components/Modules/StoryCard",
  component: StoryCard,
  argTypes: {
    fullWidth: { control: 'boolean' }
  }
} as Meta<typeof StoryCard>;

const Template: StoryFn<typeof StoryCard> = (args: any) => (
  <StoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '카드제목',
  sub: '카드 부제목 or 장르',
  fullWidth: false,
}; // Default의 props 지정