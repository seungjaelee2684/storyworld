import { useParams } from "react-router-dom";
import PageTitle from "../../components/ui/atoms/PageTitle";
import { CharacterContainer, DetailContainer, FirstDetailContainer, LaneContainer } from "./style";
import TitleLaneComponent from "../../components/ui/atoms/TitleLaneComponent";
import CategoryLane from "../../components/ui/atoms/CategoryLane";
import ChipWrapper from "../../components/ui/modules/ChipWrapper";
import Chip from "../../components/ui/atoms/Chip";
import { genderData } from "../../modules/gender";
import ContentBox from "../../components/ui/atoms/ContentBox";
import ImageBox from "../../components/ui/atoms/ImageBox";

const CharacterDetailPage = () => {

  const { characterId } = useParams();

  const traits = '현명한';

  return (
    <CharacterContainer>
      <PageTitle
        title={`My Character ${characterId}`}
        sub={`신비아이 • 이승재`}
        edit={`/characters/upload?character=${characterId}`}
        onRemove={() => {}}
        list={`/stories`}
        isLogin />
      <FirstDetailContainer>
        <DetailContainer>
          <TitleLaneComponent title='Details' unPadding />
          <LaneContainer>
            <CategoryLane expired='Age' content='27' />
            <CategoryLane expired='Gender' content={genderData[1].ko} />
          </LaneContainer>
          <LaneContainer>
            <CategoryLane expired='Occupation' content='마법사' />
            <CategoryLane expired='Location' content='웰트 대륙' />
          </LaneContainer>
        </DetailContainer>
        <ImageBox
          src={genderData[1].image}
          style={{ minWidth: '300px', width: '300px', minHeight: '300px', height: '300px' }} />
      </FirstDetailContainer>
      <DetailContainer>
        <TitleLaneComponent title='Traits' unPadding />
        <LaneContainer>
          <ChipWrapper>
            {Array(10).fill(traits).map((item: string, index: number) =>
              <Chip key={index} label={item} />)}
          </ChipWrapper>
        </LaneContainer>
        <ContentBox>
          {`현명하고 재밌는 친구`}
        </ContentBox>
      </DetailContainer>
      <DetailContainer>
        <TitleLaneComponent title='Background Story' unPadding />
        <ContentBox>
          {`현명하고 재밌는 친구`}
        </ContentBox>
      </DetailContainer>
    </CharacterContainer>
  )
};

export default CharacterDetailPage;