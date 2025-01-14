import React from 'react'
import { BottomLane, Expired, GenreTag, LaneLink, LaneTitle, StoryLaneContainer, StoryListContainer, StoryPageLayout, StoryTitle, StoryTitleBox, StoryTitleWrapper, SubText, TableHeader, TableHeaderLeftWrapper, TableHeaderRightWrapper, TitleBar } from './style';
import { genreList } from '../../modules/genres';
import { Button } from '@mui/material';

const MyStoryPage = () => {

  const objectList = {
    id: 1,
    title: '신비아이',
    genre: 0,
    writer: '은개',
    created_at: '2025-01-13'
  };

  return (
    <StoryPageLayout>
      <StoryTitleWrapper>
        <StoryTitleBox>
          <TitleBar />
          <StoryTitle>안녕하세요 유승현님</StoryTitle>
          <TitleBar />
        </StoryTitleBox>
      </StoryTitleWrapper>
      <StoryListContainer>
        <TableHeader>
          <TableHeaderLeftWrapper>
            제목
          </TableHeaderLeftWrapper>
          <TableHeaderRightWrapper>
            <Expired>장르</Expired>
            <Expired>작성자</Expired>
            <Expired>날짜</Expired>
          </TableHeaderRightWrapper>
        </TableHeader>
        {Array(10).fill(objectList)?.map((item: any, index: number) =>
          <StoryLaneContainer key={index}>
            <LaneLink href={`/story/${item?.title}`}>
              <LaneTitle>{item?.title}</LaneTitle>
              <BottomLane>
                <GenreTag $color={genreList[item?.genre]?.color}>
                  {genreList[item?.genre]?.genre}
                </GenreTag>
                <SubText>{item?.writer}</SubText>
                <SubText>{item?.created_at}</SubText>
              </BottomLane>
            </LaneLink>
          </StoryLaneContainer>)}
          <Button
            style={{ marginTop: '40px' }}
            variant='contained'
            href='/upload/story'>
            스토리 추가 하기
          </Button>
      </StoryListContainer>
    </StoryPageLayout>
  )
};

export default MyStoryPage;