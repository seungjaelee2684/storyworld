import { useEffect, useState } from "react";
import { genreList } from "../../../../modules/genres";
import DropdownComponent from "../../atoms/DropdownComponent";
import PageTitle from "../../atoms/PageTitle";
import TitleLaneComponent from "../../atoms/TitleLaneComponent";
import { UploadFormContainer } from "./style";
import InputLane from "../../modules/InputLane";
import Input from "../../atoms/Input";

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

    const { storyName, genre } = state;

    const optionList = genreList.map((item: any) => item.genre);
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
                    name='storyName'
                    value={storyName}
                    onChange={onChange} />
            </InputLane>
            <DropdownComponent
                state={dropdownValue}
                action={setDropdownValue}
                options={optionList} />
        </UploadFormContainer>
    )
};

export default UploadForm;