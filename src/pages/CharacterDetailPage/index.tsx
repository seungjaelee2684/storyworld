import PageTitle from "../../components/ui/atoms/PageTitle";
import { CharacterContainer } from "./style";

const CharacterDetailPage = () => {
  return (
    <CharacterContainer>
      <PageTitle title={`My Character`} sub={``} />
    </CharacterContainer>
  )
};

export default CharacterDetailPage;