import { Meta, StoryFn } from "@storybook/react";
import TitleLaneComponent from "./index";

export default {
    title: "Components/TitleLane", // story 이름
    component: TitleLaneComponent,
} as Meta<typeof TitleLaneComponent>;

const Template: StoryFn<typeof TitleLaneComponent> = (args: any) => (
    <TitleLaneComponent {...args} />
);

export const Small = Template.bind({});
Small.args = {
    size: "small",
    title: "small",
}; // Small의 props 지정

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
    title: "medium",
} // Medium의 props 지정

export const Large = Template.bind({});
Large.args = {
    size: "large",
    title: "large",
}; // Large의 props 지정