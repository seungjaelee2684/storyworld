import ButtonComponent from "../../atoms/ButtonComponent";
import { EmptyContainer, EmptySubTitle, EmptyTitle } from "./style";

interface EmptyListProps {
    type?: number;
    href?: string;
};

const EmptyList = ({
    type = 0,
    href = '/stories/upload'
}: EmptyListProps) => {

    const typeList = [
        { ko: '스토리', en: 'stories' },
        { ko: '에피소드', en: 'episodes' },
        { ko: '캐릭터', en: 'characters' }
    ];

    return (
        <EmptyContainer>
            <EmptyTitle>
                You haven't uploaded any {typeList[type].en} yet
            </EmptyTitle>
            <EmptySubTitle>
                당신의 첫번째 {typeList[type].ko}를 추가해보시겠습니까?
            </EmptySubTitle>
            <ButtonComponent href={href} btnType='term' label={`Add ${typeList[type].en}`} />
        </EmptyContainer>
    )
};

export default EmptyList;