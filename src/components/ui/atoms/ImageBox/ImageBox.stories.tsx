import { Meta, StoryFn } from "@storybook/react";
import ImageBox from "./index";
import Image from "../../../../assets/images/illust.webp";

export default {
  title: "Components/Atoms/ImageBox",
  component: ImageBox,
} as Meta<typeof ImageBox>;

const Template: StoryFn<typeof ImageBox> = (args: any) => (
  <ImageBox {...args} />
);

export const Small = Template.bind({});
Small.args = {
  src: Image,
  alt: '마법사',
  size: 'small',
  rounded: false
}; // Small의 props 지정

export const Medium = Template.bind({});
Medium.args = {
  src: Image,
  alt: '마법사',
  size: 'medium',
  rounded: false
}; // Medium의 props 지정

export const Large = Template.bind({});
Large.args = {
  src: Image,
  alt: '마법사',
  size: 'large',
  rounded: false
}; // Large의 props 지정

export const Rounded = Template.bind({});
Rounded.args = {
  src: Image,
  alt: '마법사',
  size: 'medium',
  rounded: true
}; // Rounded의 props 지정