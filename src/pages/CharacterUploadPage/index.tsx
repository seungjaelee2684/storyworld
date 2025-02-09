import { useEffect, useState } from 'react';
import CharacterUploadForm from '../../components/ui/organisms/CharacterUploadForm';
import { CharacterUploadContainer } from './style';

const CharacterUploadPage = () => {

  const character = new URLSearchParams(window.location.search).get('character');

  const [characterInput, setCharacterInput] = useState<any>({
    name: '',
    age: '',
    gender: 0,
    occupation: '',
    location: '',
    trait: [],
    trait_content: '',
    background: ''
  });

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
        onChange={changeHandler} />
    </CharacterUploadContainer>
  )
};

export default CharacterUploadPage;