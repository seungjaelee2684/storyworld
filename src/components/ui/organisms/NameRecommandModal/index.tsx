import { X } from "lucide-react";
import ButtonComponent from "../../atoms/ButtonComponent";
import PageTitle from "../../atoms/PageTitle";
import InputLane from "../../modules/InputLane";
import { CloseButton, LaneWrapper, ModalBackground, ModalButtonWrapper, ModalContainer, NameList, NameSelect, NameTap, RadioWrapper } from "./style";
import Radio from "../../atoms/Radio";
import { handleCharacterNameRecommand } from "../../../../utils/characterNameRecommand";

interface NameRecommandModalProps {
  isOpen?: boolean;
  style?: React.CSSProperties;
  state?: any;
  action?: React.Dispatch<React.SetStateAction<any>>;
  onClose?: (e: any) => void;
  radio?: React.ReactNode;
};

const NameRecommandModal = ({
  isOpen = false,
  onClose,
  radio,
  state,
  action,
  style,
  ...props
}: NameRecommandModalProps) => {

  const { name, name_style } = state;

  const handleClickRecommandName = (e: any) => {
    e.stopPropagation();
  };

  const handleRadioChanger = (e: any) => {
    const radioValue = e.target.value;
    if (action) action({ ...state, name_style: Number(radioValue) });
  };

  const handleClickRecommand = (e: any) => {
    e.preventDefault();
    console.log(handleCharacterNameRecommand(state));
  };

  return (
    <ModalBackground $open={isOpen} onClick={onClose}>
      <ModalContainer
        $open={isOpen}
        onClick={handleClickRecommandName}
        style={style}
        {...props}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        <PageTitle
          title='이름 추천'
          sub='입력한 정보를 토대로 이름 추천을 받으실 수 있습니다.' />
        <InputLane label='캐릭터의 세부 정보를 모두 입력한 후 추천 받으세요.'>
          <LaneWrapper>
            <NameSelect>
              {(name?.length > 0) ? name : '유형을 선택 후 추천 받기를 눌러주세요.'}
            </NameSelect>
            <ButtonComponent label='추천 받기' onClick={handleClickRecommand} />
          </LaneWrapper>
        </InputLane>
        <RadioWrapper>
          <Radio
            text='한국'
            name='name_style'
            value={0}
            checked={name_style === 0}
            onChange={handleRadioChanger} />
          <Radio
            text='일본'
            name='name_style'
            value={1}
            checked={name_style === 1}
            onChange={handleRadioChanger} />
          <Radio
            text='서양'
            name='name_style'
            value={2}
            checked={name_style === 2}
            onChange={handleRadioChanger} />
        </RadioWrapper>
        <NameList>
          <NameTap
            $checked={name === '실비아 드 프란체르'}
            onClick={() => { if (action) action({ ...state, name: '실비아 드 프란체르' }) }}>
            실비아 드 프란체르
          </NameTap>
          <NameTap
            $checked={name === '하비엘'}
            onClick={() => { if (action) action({ ...state, name: '하비엘' }) }}>
            하비엘
          </NameTap>
          <NameTap
            $checked={name === '조니악 키르딘'}
            onClick={() => { if (action) action({ ...state, name: '조니악 키르딘' }) }}>
            조니악 키르딘
          </NameTap>
        </NameList>
        <ModalButtonWrapper>
          <ButtonComponent label='선택' onClick={onClose} />
          <ButtonComponent label='취소' />
        </ModalButtonWrapper>
      </ModalContainer>
    </ModalBackground>
  )
};

export default NameRecommandModal;