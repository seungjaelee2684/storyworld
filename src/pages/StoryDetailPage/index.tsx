import { useParams } from "react-router-dom";
import { DetailListContainer, StoryButtonWrapper, StoryContainer } from "./style";
import PageTitle from "../../components/ui/atoms/PageTitle";
import TitleLaneComponent from "../../components/ui/atoms/TitleLaneComponent";
import BorderCard from "../../components/ui/modules/BorderCard";
import Img1 from "../../assets/images/background.webp";
import Img2 from "../../assets/images/background2.webp";
import Img3 from "../../assets/images/background3.webp";
import EmptyList from "../../components/ui/modules/EmptyList";
import { IoMale, IoFemale } from "react-icons/io5";
import ButtonComponent from "../../components/ui/atoms/ButtonComponent";
import { PenTool } from "lucide-react";

const StoryDetailPage = () => {

  const { storyId } = useParams();
  console.log("🚀 ~ StoryDetailPage ~ storyId:", storyId);

  const episodeList = [
    { id: 1, title: '신비아이', main_character: '에드워드', image: Img1, writer: '유승현' },
    { id: 2, title: '신비아이', main_character: '하비엘', image: Img2, writer: '이승재' },
    { id: 3, title: '신비아이', main_character: '지크 아르덴', image: Img3, writer: '유승현' },
    { id: 4, title: '신비아이', main_character: '실피아 드 프란체르', image: Img1, writer: '이승재' },
    { id: 5, title: '신비아이', main_character: '마리네', image: Img2, writer: '유승현' },
    { id: 6, title: '신비아이', main_character: '조니악 키르딘', image: Img3, writer: '이승재' },
  ];

  const characterList = [
    { id: 1, name: '하비엘', job: '검사', image: Img1, gender: 0 },
    { id: 2, name: '지크 아르덴', job: '마법사', image: Img2, gender: 0 },
    { id: 3, name: '실피아 드 프란체르', job: '마법사', image: Img3, gender: 1 },
    { id: 4, name: '마리네', job: '귀족', image: Img1, gender: 1 },
    { id: 5, name: '조니악 키르딘', job: '집사', image: Img2, gender: 0 },
    { id: 6, name: '아펠리오 드 프란체르', job: '마법사', image: Img3, gender: 0 },
  ];

  return (
    <StoryContainer>
      <PageTitle title='신비아이' sub={`판타지 • ${storyId} Episodes • ${storyId} Characters`} />
      <TitleLaneComponent
        title='Episodes'
        render={
          <StoryButtonWrapper>
            <ButtonComponent
              label='에피소드 추가'
              href='/episodes/upload'
              icon={<PenTool size={16} />}
              btnType='term' />
            <ButtonComponent
              label='캐릭터 추가'
              href='/characters/upload'
              icon={<PenTool size={16} />}
              btnType='term' />
          </StoryButtonWrapper>
        } />
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
      <TitleLaneComponent title='Characters' />
      <DetailListContainer>
        {(characterList?.length > 0)
          ? characterList?.map((item: any, index: number) =>
            <BorderCard
              key={index}
              title={item?.name}
              sub={item?.job}
              image={item?.image}
              href={`/characters/detail/${item?.id}`}
              icon={(item?.gender === 0) ? <IoMale color='#0074D9' /> : <IoFemale color='#FF69B4' />} />)
          : <EmptyList />}
      </DetailListContainer>
    </StoryContainer>
  )
};

export default StoryDetailPage;