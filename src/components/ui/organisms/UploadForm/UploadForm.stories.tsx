import { Meta, StoryFn } from "@storybook/react";
import UploadForm from "./index";

export default {
    title: "Components/Organisms/UploadForm",
    component: UploadForm,
    argTypes: {
        state: { control: 'object' }
    }
} as Meta<typeof UploadForm>;

const Template: StoryFn<typeof UploadForm> = (args: any) => (
    <UploadForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
    state: {
        storyName: '',
        description: '',
        genre: '',
    },
    action: () => {},
};
// Default의 props 지정