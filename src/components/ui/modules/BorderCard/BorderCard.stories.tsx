import { Meta, StoryFn } from "@storybook/react";
import BorderCard from "./index";

export default {
  title: "Components/Modules/BorderCard",
  component: BorderCard,
  argTypes: {
    fullWidth: { control: 'boolean' }
  }
} as Meta<typeof BorderCard>;

const Template: StoryFn<typeof BorderCard> = (args: any) => (
  <BorderCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '카드제목',
  sub: '카드 부제목 or 장르',
  fullWidth: false,
}; // Default의 props 지정