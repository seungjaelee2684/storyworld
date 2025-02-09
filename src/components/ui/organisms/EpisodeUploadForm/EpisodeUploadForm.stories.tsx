import { Meta, StoryFn } from "@storybook/react";
import EpisodeUploadForm from "./index";

export default {
    title: "Components/Organisms/EpisodeUploadForm",
    component: EpisodeUploadForm,
} as Meta<typeof EpisodeUploadForm>;

const Template: StoryFn<typeof EpisodeUploadForm> = (args: any) => (
    <EpisodeUploadForm {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
// Default의 props 지정