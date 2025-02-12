import CreateButton from "../../components/ui/atoms/CreateButton";
import DashboardCard from "../../components/ui/atoms/DashboardCard";
import PageTitle from "../../components/ui/atoms/PageTitle";
import TitleLaneComponent from "../../components/ui/atoms/TitleLaneComponent";
import { CountListWrapper, CreateButtonWrapper, MyPageContainer } from "./style";

const MyPage = () => {
  return (
    <MyPageContainer>
      <PageTitle title='My Dashboard' />
      <CountListWrapper>
        <DashboardCard
          count={0}
          label='Stories'
          href='/stories' />
        <DashboardCard
          count={0}
          label='Episodes' />
        <DashboardCard
          count={0}
          label='Characters' />
      </CountListWrapper>
      <TitleLaneComponent title='Your writing activities' unPadding />
      <CreateButtonWrapper>
        <CreateButton
          title='Create a World'
          sub='A world is a collection of stories.'
          href='/stories/upload'
          fullWidth />
        <CreateButton
          title='Create an episode'
          sub='An episode is a chapter in your story.'
          href='/episodes/upload'
          fullWidth />
        <CreateButton
          title='Create a character'
          sub='A character is an actor who tells your story.'
          href='/characters/upload'
          fullWidth />
      </CreateButtonWrapper>
    </MyPageContainer>
  )
};

export default MyPage;