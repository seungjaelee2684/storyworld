import { useEffect, useState } from 'react';
import CharacterUploadForm from '../../components/ui/organisms/CharacterUploadForm';
import { CharacterUploadContainer } from './style';

const CharacterUploadPage = () => {

  const character = new URLSearchParams(window.location.search).get('character');

  const [characterInput, setCharacterInput] = useState<any>({
    storyId: null,
    titleName: '',
    age: '',
    gender: 0,
    occupation: '',
    location: '',
    trait: [],
    trait_content: '',
    background: '',
    name_style: 0,
  });

  const list = [
    { id: 1, title: '신비아이' },
    { id: 2, title: '룬의 아이들' },
    { id: 3, title: '해리포터' }
  ];

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setCharacterInput({
      ...characterInput,
      [name]: value
    });
  };

  useEffect(() => {
    if (character) {

    };
  }, [character]);

  return (
    <CharacterUploadContainer>
      <CharacterUploadForm
        state={characterInput}
        action={setCharacterInput}
        onChange={changeHandler}
        options={list} />
    </CharacterUploadContainer>
  )
};

export default CharacterUploadPage;