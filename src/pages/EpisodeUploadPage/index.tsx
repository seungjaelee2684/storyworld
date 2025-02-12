import { useEffect, useState } from "react";
import { EpisodeUploadContainer } from "./style";
import EpisodeUploadForm from "../../components/ui/organisms/EpisodeUploadForm";

const EpisodeUploadPage = () => {

  const episode = new URLSearchParams(window.location.search).get('episode');

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [character, setCharacter] = useState<any>([]);
  const [storyId, setStoryId] = useState<any>('');

  const list = Array(10).fill({id: 1, name: '하비엘', gender: 0});
  const storyList = [
    { id: 1, title: '신비아이' },
    { id: 2, title: '룬의 아이들' },
    { id: 3, title: '해리포터' }
  ];

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
        storyId={storyId}
        setStoryId={setStoryId}
        selectOptions={storyList}
        options={list} />
    </EpisodeUploadContainer>
  )
};

export default EpisodeUploadPage;