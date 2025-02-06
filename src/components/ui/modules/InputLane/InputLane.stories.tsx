import { Meta, StoryFn } from "@storybook/react";
import InputLane from "./index";
import Input from "../../atoms/Input";

export default {
    title: "Components/Modules/InputLane", // story 이름
    component: InputLane,
    argTypes: {
        children: { control: <Input type="password" /> }
    }
} as Meta<typeof InputLane>;

const Template: StoryFn<typeof InputLane> = (args: any) => (
    <InputLane {...args} />
);

export const Essential = Template.bind({});
Essential.args = {
    state: "essential",
    label: "Essential",
    children: <Input type="password" />
}; // Essential의 props 지정