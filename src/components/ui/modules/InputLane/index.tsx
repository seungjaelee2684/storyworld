import { CircleCheck } from "lucide-react";
import { ChoiceSpan, EssentialSpan, InputLabelContainer, InputLaneContainer, LabelText, LeftWrapper } from "./style";

interface InputLaneProps {
  state?: string;
  label: string;
  children?: React.ReactNode;
  notFull?: boolean;
  style?: React.CSSProperties;
};

const InputLane = ({
  state = 'default',
  label,
  children,
  notFull = false,
  style,
  ...props
}: InputLaneProps) => {
  return (
    <InputLaneContainer $notfull={notFull} style={style} {...props}>
      <InputLabelContainer>
        <LeftWrapper>
          <LabelText>{label}</LabelText>
          {(state) === 'essential'
            && <EssentialSpan><CircleCheck size={12} /></EssentialSpan>}
          {(state === 'choice')
            && <ChoiceSpan>(선택)</ChoiceSpan>}
        </LeftWrapper>
      </InputLabelContainer>
      {children}
    </InputLaneContainer>
  )
};

export default InputLane;