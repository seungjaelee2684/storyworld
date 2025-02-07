import { Meta, StoryFn } from "@storybook/react";
import DropdownComponent from "./index";
import { useState } from "react";

export default {
    title: "Components/Atoms/Dropdown", // story 이름
    component: DropdownComponent,
    argTypes: {
      fullWidth: { control: "boolean" },
      size: {
        control: { type: "select" },
        options: ["small", "medium", "large"], // size prop의 옵션
      },
      options: {
        control: { type: "object" }, // 배열 대신 객체 컨트롤로 지정
      },
    },
} as Meta<typeof DropdownComponent>;

const Template: StoryFn<typeof DropdownComponent> = (args: any) => {
  const [state, setState] = useState("");

  return <DropdownComponent {...args} state={state} action={setState} />;
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  fullWidth: false,
  options: ["Option 1", "Option 2", "Option 3"],
}; // Small의 props 지정

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  fullWidth: false,
  options: ["Option 1", "Option 2", "Option 3"],
} // Medium의 props 지정

export const Large = Template.bind({});
Large.args = {
  size: "large",
  fullWidth: false,
  options: ["Option 1", "Option 2", "Option 3"],
}; // Large의 props 지정