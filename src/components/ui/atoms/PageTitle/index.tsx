import { Menu, Pencil, Trash2 } from "lucide-react";
import ButtonComponent from "../ButtonComponent";
import { ObjectWrapper, PageSubTitle, PageTitleContainer, PageTitleWrapper, TitleContainer } from "./style";

interface PageTitleProps {
  title: string;
  sub?: string;
  isLogin?: boolean;
  edit?: string;
  onRemove?: (e: any) => void;
  list?: string;
  style?: React.CSSProperties;
};

const PageTitle = ({
  title,
  sub,
  isLogin,
  edit,
  onRemove,
  list,
  style,
  ...props
}: PageTitleProps) => {
  return (
    <PageTitleContainer style={style} {...props}>
      <PageTitleWrapper>{title}</PageTitleWrapper>
      {(sub)
        && <TitleContainer>
          <PageSubTitle>{sub}</PageSubTitle>
          {(isLogin)
            && <ObjectWrapper>
              <ButtonComponent
                btnType='light'
                size='s_small'
                href={edit}
                icon={<Pencil size={18} />} />
              <ButtonComponent
                btnType='light'
                size='s_small'
                onClick={onRemove}
                icon={<Trash2 size={18} />} />
              <ButtonComponent
                btnType='term'
                size='s_small'
                href={list}
                icon={<Menu size={18} />} />
            </ObjectWrapper>}
        </TitleContainer>}
    </PageTitleContainer>
  )
};

export default PageTitle;