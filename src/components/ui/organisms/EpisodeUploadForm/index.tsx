import PageTitle from "../../atoms/PageTitle";
import TitleLaneComponent from "../../atoms/TitleLaneComponent";
import { CharacterListWrapper, UploadFormContainer } from "./style";
import InputLane from "../../modules/InputLane";
import Input from "../../atoms/Input";
import ButtonComponent from "../../atoms/ButtonComponent";
import PostEditor from "../../modules/PostEditor";
import CharacterCheck from "../../modules/CharacterCheck";
import { genderData } from "../../../../modules/gender";

interface EpisodeUploadFormProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    character: any[];
    setCharacter: React.Dispatch<React.SetStateAction<any>>;
    options?: any[];
};

const EpisodeUploadForm = ({
    title,
    setTitle,
    content,
    setContent,
    character,
    setCharacter,
    options
}: EpisodeUploadFormProps) => {

    console.log(character);

    const changeHandler = (item: any) => {
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
            <InputLane label='Episode Title' >
                <Input
                    size='large'
                    name='title'
                    value={title}
                    onChange={(e: any) => setTitle(e.target.value)} />
            </InputLane>
            <InputLane label='Character' >
                <CharacterListWrapper>
                    {options?.map((item: any, index: number) =>
                        <CharacterCheck
                            key={index}
                            image={genderData[item.gender].image}
                            value={item.name}
                            checked={character?.includes(item.name)}
                            onChange={() => changeHandler(item.name)} />)}
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