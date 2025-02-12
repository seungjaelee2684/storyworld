import { CountText, DashboardCardContainer, LabelText } from "./style";

interface DashboardCardProps {
  label?: string;
  count?: string | number;
  href?: string;
  style?: React.CSSProperties;
};

const DashboardCard = ({
  label,
  count,
  href,
  style,
  ...props
}: DashboardCardProps) => {
  return (
    <DashboardCardContainer style={style} {...props}>
      <CountText href={href}>{count}</CountText>
      <LabelText>{label}</LabelText>
    </DashboardCardContainer>
  )
};

export default DashboardCard;