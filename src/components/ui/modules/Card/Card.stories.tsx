import { Meta, StoryFn } from "@storybook/react";
import Card from "./index";

export default {
  title: "Components/Modules/Card",
  component: Card,
  argTypes: {
    fullWidth: { control: 'boolean' }
  }
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args: any) => (
  <Card {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '카드제목',
  sub: '카드 부제목 or 장르',
  fullWidth: false,
}; // Default의 props 지정