import PageTitle from "../../atoms/PageTitle";
import TitleLaneComponent from "../../atoms/TitleLaneComponent";
import { CharacterListWrapper, InputWrapper, UploadFormContainer } from "./style";
import InputLane from "../../modules/InputLane";
import Input from "../../atoms/Input";
import ButtonComponent from "../../atoms/ButtonComponent";
import PostEditor from "../../modules/PostEditor";
import CharacterCheck from "../../modules/CharacterCheck";
import { genderData } from "../../../../modules/gender";
import DropdownComponent from "../../atoms/DropdownComponent";

interface EpisodeUploadFormProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    character: any[];
    setCharacter: React.Dispatch<React.SetStateAction<any>>;
    storyId: any;
    setStoryId: React.Dispatch<React.SetStateAction<any>>;
    selectOptions: any[];
    options?: any[];
};

const EpisodeUploadForm = ({
    title,
    setTitle,
    content,
    setContent,
    character,
    setCharacter,
    storyId,
    setStoryId,
    selectOptions,
    options
}: EpisodeUploadFormProps) => {

    console.log(character);

    const handleCharacterSelect = (item: any) => {
        if (character?.includes(item)) {
            const filterData = character.filter((check: any) => item !== check);
            setCharacter(filterData);
        } else {
            setCharacter([...character, item]);
        };
    };

    return (
        <UploadFormContainer>
            <PageTitle
                title='Create Your Episode'
                sub='Make a great episode in your world!' />
            <TitleLaneComponent unPadding title='Basic Information' />
            <InputWrapper>
                <InputLane label='Episode Title' >
                    <Input
                        size='large'
                        name='title'
                        value={title}
                        fullWidth
                        onChange={(e: any) => setTitle(e.target.value)} />
                </InputLane>
                <InputLane label='Select your story' notFull>
                    <DropdownComponent
                        size='large'
                        width='medium'
                        state={storyId}
                        action={setStoryId}
                        options={selectOptions} />
                </InputLane>
            </InputWrapper>
            <InputLane label='Characters in this episode' >
                <CharacterListWrapper>
                    {options?.map((item: any, index: number) =>
                        <CharacterCheck
                            key={index}
                            image={genderData[item.gender].image}
                            value={item.id}
                            characterName={item.name}
                            checked={character?.includes(item.id)}
                            onChange={() => handleCharacterSelect(item.id)} />)}
                </CharacterListWrapper>
            </InputLane>
            <InputLane label='Story'>
                <PostEditor
                    value={content}
                    onChange={() => setContent(content)} />
            </InputLane>
            <ButtonComponent
                label='Add Episode'
                size='large'
                btnType='term'
                fullWidth />
        </UploadFormContainer>
    )
};

export default EpisodeUploadForm;