import { useParams } from "react-router-dom";
import { DetailListContainer, StoryContainer } from "./style";
import PageTitle from "../../components/ui/atoms/PageTitle";
import TitleLaneComponent from "../../components/ui/atoms/TitleLaneComponent";
import BorderCard from "../../components/ui/modules/BorderCard";
import Img1 from "../../assets/images/background.webp";
import Img2 from "../../assets/images/background2.webp";
import Img3 from "../../assets/images/background3.webp";
import EmptyList from "../../components/ui/modules/EmptyList";

const StoryDetailPage = () => {

  const { storyId } = useParams();
  console.log("🚀 ~ StoryDetailPage ~ storyId:", storyId);

  const episodeList = [
    { id: 1, title: '신비아이', main_character: '판타지', image: Img1, writer: '유승현' },
    { id: 2, title: '신비아이', main_character: '판타지', image: Img2, writer: '이승재' },
    { id: 3, title: '신비아이', main_character: '판타지', image: Img3, writer: '유승현' },
    { id: 4, title: '신비아이', main_character: '판타지', image: Img1, writer: '이승재' },
    { id: 5, title: '신비아이', main_character: '판타지', image: Img2, writer: '유승현' },
    { id: 6, title: '신비아이', main_character: '판타지', image: Img3, writer: '이승재' },
  ];

  return (
    <StoryContainer>
      <PageTitle title='신비아이' sub={`판타지 • ${storyId} Episodes`}/>
      <TitleLaneComponent title='Episodes' />
      <DetailListContainer>
        {(episodeList?.length > 0)
          ? episodeList?.map((item: any, index: number) =>
            <BorderCard
              key={index}
              title={item?.title}
              sub={item?.main_character}
              image={item?.image}
              href={`/episodes/detail/${item?.id}`} />)
          : <EmptyList />}
      </DetailListContainer>
    </StoryContainer>
  )
};

export default StoryDetailPage;