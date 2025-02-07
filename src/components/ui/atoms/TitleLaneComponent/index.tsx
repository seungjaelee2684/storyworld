import { ListTitle, ListTopLane, MoreButton } from "./style";

interface TitleLaneComponenttProps {
    size?: string;
    title: string;
    more?: string;
    unPadding?: boolean;
};

const TitleLaneComponent = ({
    size = 'medium',
    title,
    more,
    unPadding = false,
}: TitleLaneComponenttProps) => {

    return (
        <ListTopLane $unpadding={unPadding}>
            <ListTitle
                $size={size}>
                {title}
            </ListTitle>
            {(more)
                && <MoreButton href={more}>
                    더보기
                </MoreButton>}
        </ListTopLane>
    )
};

export default TitleLaneComponent;