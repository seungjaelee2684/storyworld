import PageTitle from "../../components/ui/atoms/PageTitle";
import StoryCard from "../../components/ui/modules/StoryCard";
import EmptyList from "../../components/ui/modules/EmptyList";
import { ListContainer, StoryListContainer } from "./style";
import Img1 from "../../assets/images/background.webp";
import Img2 from "../../assets/images/background2.webp";
import Img3 from "../../assets/images/background3.webp";
import ToggleContainer from "../../components/ui/modules/ToggleContainer";
import Toggle from "../../components/ui/atoms/Toggle";
import { useState } from "react";

const StoryListPage = () => {

  const [isMine, setIsMine] = useState<boolean>(false);

  const storyList = [
    { id: 1, title: '신비아이', genre: '판타지', image: Img1, writer: '유승현' },
    { id: 2, title: '신비아이', genre: '판타지', image: Img2, writer: '이승재' },
    { id: 3, title: '신비아이', genre: '판타지', image: Img3, writer: '유승현' },
    { id: 4, title: '신비아이', genre: '판타지', image: Img1, writer: '이승재' },
    { id: 5, title: '신비아이', genre: '판타지', image: Img2, writer: '유승현' },
    { id: 6, title: '신비아이', genre: '판타지', image: Img3, writer: '이승재' },
  ];

  const filterList = storyList?.filter((item: any) => item.writer === '유승현');
  const resultList = isMine ? filterList : storyList;

  return (
    <StoryListContainer>
      <PageTitle title='My Stories' sub='stories' />
      <ToggleContainer state={isMine} label='내 스토리 보기'>
        <Toggle state={isMine} action={setIsMine} />
      </ToggleContainer>
      <ListContainer>
        {(resultList?.length > 0)
          ? resultList?.map((item: any, index: number) =>
            <StoryCard
              key={index}
              title={item?.title}
              sub={item?.genre}
              writer={item?.writer}
              image={item?.image}
              href={`/stories/${item?.id}`} />)
          : <EmptyList />}
      </ListContainer>
    </StoryListContainer>
  )
};

export default StoryListPage;