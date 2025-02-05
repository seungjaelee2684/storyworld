import { ChevronRight, Plus } from "lucide-react";
import { CreateButtonContainer, CreateIconBox, CreateSubTitle, CreateTitle, RightArrow, TextWrapper } from "./style";

interface CreateButtonProps {
  size?: string;
  fullWidth?: boolean;
  href?: string;
};

const CreateButton = ({
  size = 'medium',
  fullWidth = false,
  href
}: CreateButtonProps) => {
  return (
    <CreateButtonContainer
      href={href}
      $size={size}
      $full={fullWidth}>
      <CreateIconBox>
        <Plus size={24} />
      </CreateIconBox>
      <TextWrapper>
        <CreateTitle>Create a World</CreateTitle>
        <CreateSubTitle>
          A world is a collection of stories.
        </CreateSubTitle>
      </TextWrapper>
      <RightArrow>
        <ChevronRight size={24} />
      </RightArrow>
    </CreateButtonContainer>
  )
}

export default CreateButton;