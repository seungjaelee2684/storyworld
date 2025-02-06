import { UploadContainer } from './style';
import UploadForm from '../../components/ui/organisms/UploadForm';
import { useState } from 'react';

const UploadStory = () => {

  const [upload, setUpload] = useState<any>({
    storyName: '',
    description: '',
    genre: '',
  });

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setUpload({
      ...upload,
      [name]: value
    });
  };

  return (
    <UploadContainer>
      <UploadForm
        state={upload}
        action={setUpload}
        onChange={changeHandler} />
    </UploadContainer>
  )
};

export default UploadStory;