import { useParams } from "react-router-dom";
import PageTitle from "../../components/ui/atoms/PageTitle";
import { CharacterContainer } from "./style";
import ButtonComponent from "../../components/ui/atoms/ButtonComponent";
import TitleLaneComponent from "../../components/ui/atoms/TitleLaneComponent";

const CharacterDetailPage = () => {

  const { characterId } = useParams();

  return (
    <CharacterContainer>
      <PageTitle
        title={`My Character ${characterId}`}
        object={
          <ButtonComponent
            label='Edit'
            size='large'
            btnType='light' />
        }
        between />
      <TitleLaneComponent title='Details' />
    </CharacterContainer>
  )
};

export default CharacterDetailPage;