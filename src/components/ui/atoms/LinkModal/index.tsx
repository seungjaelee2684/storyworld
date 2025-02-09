import { DetailModalContainer, ModalLane, ModalLink, ModalTitle } from "./style";

interface LinkModalProps {
  option?: any[];
  login?: string;
  href?: string;
  onClick?: (e: any) => void;
};

const LinkModal = ({
  option,
  login,
  href,
  onClick,
}: LinkModalProps) => {
  return (
    <DetailModalContainer>
      {(login) && <ModalTitle>어서오세요 {login} 님</ModalTitle>}
      {(option)
        && option.map((item: any, index: number) =>
          <ModalLane key={index}>
            <ModalLink href={href}>
              {item}
            </ModalLink>
          </ModalLane>)}
      {(login)
        && <ModalLane onClick={onClick}>
          로그아웃
        </ModalLane>}
    </DetailModalContainer>
  )
};

export default LinkModal;