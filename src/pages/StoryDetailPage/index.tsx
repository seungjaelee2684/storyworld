import { useParams } from "react-router-dom";

const StoryDetailPage = () => {

  const { storyId } = useParams();
  console.log("🚀 ~ StoryDetailPage ~ storyId:", storyId);

  return (
    <div>StoryDetailPage</div>
  )
};

export default StoryDetailPage;