import { UploadContainer } from './style';
import UploadForm from '../../components/ui/organisms/UploadForm';
import { useState } from 'react';

const UploadStory = () => {

  const [upload, setUpload] = useState<any>({
    storyName: ''
  });

  return (
    <UploadContainer>
      <UploadForm
        state={upload}
        action={setUpload} />
    </UploadContainer>
  )
};

export default UploadStory;