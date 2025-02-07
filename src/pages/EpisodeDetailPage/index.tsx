import { useParams } from "react-router-dom";

const EpisodeDetailPage = () => {

  const { episodeId } = useParams();

  return (
    <div>EpisodeDetailPage{episodeId}</div>
  )
};

export default EpisodeDetailPage;