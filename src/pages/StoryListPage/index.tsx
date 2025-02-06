import PageTitle from "../../components/ui/atoms/PageTitle";
import EmptyList from "../../components/ui/modules/EmptyList";
import { ListContainer, StoryListContainer } from "./style";

const StoryListPage = () => {
  return (
    <StoryListContainer>
        <PageTitle title='My Stories' sub='stories' />
        <ListContainer>
            <EmptyList />
        </ListContainer>
    </StoryListContainer>
  )
};

export default StoryListPage;