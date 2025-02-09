import { Meta, StoryFn } from "@storybook/react";
import CharacterUploadForm from "./index";

export default {
    title: "Components/Organisms/CharacterUploadForm",
    component: CharacterUploadForm,
    argTypes: {
        state: { control: 'object' }
    }
} as Meta<typeof CharacterUploadForm>;

const Template: StoryFn<typeof CharacterUploadForm> = (args: any) => (
    <CharacterUploadForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
    state: {
        name: '',
        age: '',
        gender: 0,
        occupation: '',
        location: '',
        trait: [],
        trait_content: '',
        background: ''
      },
    action: () => {},
};
// Default의 props 지정