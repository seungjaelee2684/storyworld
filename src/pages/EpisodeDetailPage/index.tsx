import { useParams } from "react-router-dom";
import { EpisodeContainer } from "./style";

const EpisodeDetailPage = () => {

  const { episodeId } = useParams();

  return (
    <EpisodeContainer>
      EpisodeDetailPage{episodeId}
    </EpisodeContainer>
  )
};

export default EpisodeDetailPage;