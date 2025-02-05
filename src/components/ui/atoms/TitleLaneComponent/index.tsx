import { ListTitle, ListTopLane, MoreButton } from "./style";

interface TitleLaneComponenttProps {
    size?: string;
    title: string;
    more?: string;
};

const TitleLaneComponent = ({
    size = 'medium',
    title,
    more
}: TitleLaneComponenttProps) => {

    return (
        <ListTopLane>
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