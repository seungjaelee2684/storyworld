import { ChevronRight, Plus } from "lucide-react";
import { CreateButtonContainer, CreateIconBox, CreateSubTitle, CreateTitle, RightArrow, TextWrapper } from "./style";

interface CreateButtonProps {
  title?: string;
  sub?: string;
  size?: string;
  fullWidth?: boolean;
  href?: string;
};

const CreateButton = ({
  title,
  sub,
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
        <CreateTitle>{title}</CreateTitle>
        <CreateSubTitle>
          {sub}
        </CreateSubTitle>
      </TextWrapper>
      <RightArrow>
        <ChevronRight size={24} />
      </RightArrow>
    </CreateButtonContainer>
  )
}

export default CreateButton;