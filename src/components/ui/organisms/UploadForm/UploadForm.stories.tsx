import { Meta, StoryFn } from "@storybook/react";
import UploadForm from "./index";

export default {
    title: "Components/Organisms/UploadForm",
    component: UploadForm
} as Meta<typeof UploadForm>;

const Template: StoryFn<typeof UploadForm> = (args: any) => (
    <UploadForm {...args} />
);

export const Default = Template.bind({
    
}); // Default의 props 지정