import { useEffect, useState } from "react";
import { genreList } from "../../../../modules/genres";
import DropdownComponent from "../../atoms/DropdownComponent";
import PageTitle from "../../atoms/PageTitle";
import TitleLaneComponent from "../../atoms/TitleLaneComponent";
import { UploadFormContainer } from "./style";
import InputLane from "../../modules/InputLane";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import ButtonComponent from "../../atoms/ButtonComponent";

interface UploadFormProps {
    state: any;
    action: React.Dispatch<React.SetStateAction<any>>;
    onChange?: (e: any) => void;
};

const UploadForm = ({
    state,
    action,
    onChange,
}: UploadFormProps) => {

    const { title, sub_title, description } = state;
    console.log(state);

    const optionList = genreList.map((item: any) => item.title);
    const [dropdownValue, setDropdownValue] = useState<string>('');

    useEffect(() => {
        action({ ...state, genre: dropdownValue });
    }, [dropdownValue]);

    return (
        <UploadFormContainer>
            <PageTitle
                title='Create Your Story'
                sub='Set up your own world where you can make your ideal come true!' />
            <TitleLaneComponent unPadding title='Basic Information' />
            <InputLane label='Story Name' >
                <Input
                    size='large'
                    name='title'
                    value={title}
                    onChange={onChange}
                    fullWidth />
            </InputLane>
            <InputLane label='Subheading' >
                <Input
                    size='large'
                    name='sub_title'
                    value={sub_title}
                    onChange={onChange}
                    fullWidth />
            </InputLane>
            <InputLane label='Description'>
                <Textarea
                    size='large'
                    name='description'
                    value={description}
                    onChange={onChange}
                    fullWidth />
            </InputLane>
            <InputLane label='Genre'>
                <DropdownComponent
                    size='large'
                    state={dropdownValue}
                    action={setDropdownValue}
                    options={optionList}
                    stringify
                    fullWidth />
            </InputLane>
            <ButtonComponent
                label='Add Story'
                size='large'
                btnType='term'
                fullWidth />
        </UploadFormContainer>
    )
};

export default UploadForm;