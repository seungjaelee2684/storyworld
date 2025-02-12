import PageTitle from "../../atoms/PageTitle";
import TitleLaneComponent from "../../atoms/TitleLaneComponent";
import { CheckboxWrapper, InputLaneWrapper, UploadFormContainer, ImageRadioWrapper } from "./style";
import InputLane from "../../modules/InputLane";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import ButtonComponent from "../../atoms/ButtonComponent";
import ImageRadio from "../../atoms/ImageRadio";
import Checkbox from "../../atoms/Checkbox";
import { traitTags } from "../../../../modules/traitsList";
import DropdownComponent from "../../atoms/DropdownComponent";
import { useEffect, useState } from "react";
import NameRecommandModal from "../NameRecommandModal";

interface CharacterUploadFormProps {
    state: any;
    action: React.Dispatch<React.SetStateAction<any>>;
    onChange?: (e: any) => void;
    options: any[];
};

const CharacterUploadForm = ({
    state,
    action,
    onChange,
    options
}: CharacterUploadFormProps) => {

    const { name, age, gender, occupation, location, trait, trait_content, background } = state;
    console.log(state);

    const [recommandOpen, setRecommandOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<any>(null);

    const radioChangeHandle = (e: any) => {
        const radioValue = e.target.value;
        action({ ...state, gender: Number(radioValue) });
    };

    const checkHandle = (item: string) => {
        if (trait?.includes(item)) {
            const filterData = trait?.filter((tag: string) => item !== tag);
            action({ ...state, trait: filterData });
        } else {
            action({ ...state, trait: [...trait, item] });
        };
    };

    const submitUploadHandle = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        alert(`${JSON.stringify(state)}`)
    };

    const handleNameRecommandModalOpen = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setRecommandOpen(true);
    };

    const handleNameRecommandModalClose = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setRecommandOpen(false);
    };

    useEffect(() => {
        action({ ...state, storyId: select });
    }, [select]);

    return (
        <UploadFormContainer onSubmit={submitUploadHandle}>
            <NameRecommandModal
                isOpen={recommandOpen}
                onClose={handleNameRecommandModalClose}
                state={state}
                action={action} />
            <PageTitle title='Character Upload' sub='Create your own character!' />
            <TitleLaneComponent unPadding title='Basic Information' />
            <InputLane label='Select your story'>
                <DropdownComponent
                    size='large'
                    fullWidth
                    state={select}
                    action={setSelect}
                    options={options} />
            </InputLane>
            <InputLane label='Character Name' >
                <InputLaneWrapper>
                    <Input
                        size='large'
                        name='name'
                        value={name}
                        onChange={onChange}
                        placeholder='캐릭터명'
                        fullWidth />
                    <ButtonComponent
                        label='이름 추천'
                        onClick={handleNameRecommandModalOpen} />
                </InputLaneWrapper>
            </InputLane>
            <InputLane label='Age' >
                <Input
                    size='large'
                    name='age'
                    value={age}
                    onChange={onChange}
                    placeholder='나이'
                    fullWidth />
            </InputLane>
            <InputLane label='Occupation' >
                <Input
                    size='large'
                    name='occupation'
                    value={occupation}
                    onChange={onChange}
                    placeholder='직업'
                    fullWidth />
            </InputLane>
            <InputLane label='Location' >
                <Input
                    size='large'
                    name='location'
                    value={location}
                    onChange={onChange}
                    placeholder='출신지'
                    fullWidth />
            </InputLane>
            <InputLane label='Gender'>
                <ImageRadioWrapper>
                    <ImageRadio
                        text='남성'
                        name='gender'
                        value={0}
                        checked={gender === 0}
                        onChange={radioChangeHandle} />
                    <ImageRadio
                        text='여성'
                        name='gender'
                        value={1}
                        checked={gender === 1}
                        onChange={radioChangeHandle} />
                </ImageRadioWrapper>
            </InputLane>
            <InputLane label='Traits'>
                <CheckboxWrapper>
                    {traitTags.map((item: any, index: number) =>
                        <Checkbox
                            key={index}
                            value={item}
                            selected={trait?.includes(item)}
                            onChange={() => checkHandle(item)} />)}
                </CheckboxWrapper>
            </InputLane>
            <InputLane label='Traits Detail' >
                <Textarea
                    size='large'
                    name='trait_content'
                    value={trait_content}
                    onChange={onChange}
                    placeholder='캐릭터의 성격을 자세하게 작성해주세요.'
                    fullWidth />
            </InputLane>
            <InputLane label='Background Story' >
                <Textarea
                    size='large'
                    name='background'
                    value={background}
                    onChange={onChange}
                    placeholder='배경 스토리를 작성해주세요.'
                    fullWidth />
            </InputLane>
            <ButtonComponent
                label='Add Character'
                size='large'
                btnType='term'
                fullWidth
                type='submit' />
        </UploadFormContainer>
    )
};

export default CharacterUploadForm;