import { UploadContainer } from './style';
import UploadForm from '../../components/ui/organisms/UploadForm';
import { useEffect, useState } from 'react';

const StoryUploadPage = () => {

  const story = new URLSearchParams(window.location.search).get('story');

  const [upload, setUpload] = useState<any>({
    title: '',
    sub_title: '',
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

export default StoryUploadPage;