import { useEffect, useState } from "react";
import { EpisodeUploadContainer } from "./style";
import EpisodeUploadForm from "../../components/ui/organisms/EpisodeUploadForm";

const EpisodeUploadPage = () => {

  const episode = new URLSearchParams(window.location.search).get('episode');

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [character, setCharacter] = useState<any>([]);

  const list = Array(10).fill({name: '하비엘', gender: 0});

  useEffect(() => {
    if (episode) {

    };
  }, [episode]);

  return (
    <EpisodeUploadContainer>
      <EpisodeUploadForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        character={character}
        setCharacter={setCharacter}
        options={list} />
    </EpisodeUploadContainer>
  )
};

export default EpisodeUploadPage;