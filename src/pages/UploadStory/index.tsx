import { useState } from 'react'
import { UploadContainer } from './style';
import DropdownComponent from '../../components/ui/DropdownComponent';
import { genreList } from '../../modules/genres';

const UploadStory = () => {

  const optionList = genreList.map((item: any) => item.genre);
  console.log("🚀 ~ UploadStory ~ optionList:", optionList)
  const [dropdownValue, setDropdownValue] = useState<string>('');

  return (
    <UploadContainer>
      <DropdownComponent
        state={dropdownValue}
        action={setDropdownValue}
        options={optionList} />
    </UploadContainer>
  )
};

export default UploadStory;