import { ListTitle, ListTopLane, MoreButton } from "./style";

interface TitleLaneComponenttProps {
    size?: string;
    title: string;
    more?: string;
    render?: React.ReactNode;
    unPadding?: boolean;
    style?: React.CSSProperties;
};

const TitleLaneComponent = ({
    size = 'medium',
    title,
    more,
    render,
    unPadding = false,
    style,
    ...props
}: TitleLaneComponenttProps) => {

    return (
        <ListTopLane
            $unpadding={unPadding}
            style={style}
            {...props}>
            <ListTitle
                $size={size}>
                {title}
            </ListTitle>
            {(more)
                && <MoreButton href={more}>
                    더보기
                </MoreButton>}
            {(render) && render}
        </ListTopLane>
    )
};

export default TitleLaneComponent;