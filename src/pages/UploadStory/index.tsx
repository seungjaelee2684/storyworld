import { UploadContainer } from './style';
import UploadForm from '../../components/ui/organisms/UploadForm';
import { useEffect, useState } from 'react';

const UploadStory = () => {

  const story = new URLSearchParams(window.location.search).get('story');

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

  useEffect(() => {
    if (story) {
      
    }
  }, [story]);

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