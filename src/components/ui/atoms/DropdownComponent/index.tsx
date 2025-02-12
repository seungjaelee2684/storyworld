import React, { useEffect, useRef, useState } from 'react'
import { DropdownButton, DropdownMenu, DropdownMenuButton } from './style';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface DropdownComponentProps {
    fullWidth?: boolean | undefined;
    size?: string;
    width?: string;
    state: string;
    action: React.Dispatch<React.SetStateAction<string>>;
    options: any[];
    style?: React.CSSProperties;
    stringify?: boolean;
};

const DropdownComponent = ({
    fullWidth,
    size = 'medium',
    width,
    state,
    action,
    options,
    style,
    stringify = false,
    ...props
}: DropdownComponentProps) => {

    const dropdownRef = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [menuValue, setMenuValue] = useState<string>('선택해주세요');

    const openFunc = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open)
    };

    const handleOpen = (e: any, item: any) => {
        e.preventDefault();
        e.stopPropagation();
        action(item);
        if (stringify) {
            setMenuValue(item?.title);
        } else {
            setMenuValue(item?.title);
        };
        setOpen(false);
    };

    useEffect(() => {
        const handleClick = (e: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            };
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <DropdownButton
            onClick={openFunc}
            $full={fullWidth}
            $width={(width) ? width : size}
            $size={size}
            $open={open}
            style={style}
            ref={dropdownRef}
            {...props}>
            {(stringify) ? (state) ? state : '선택해주세요' : menuValue}
            {(open) ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            {(open)
                && <DropdownMenu
                    $size={size}>
                    {options?.map((item: any, index: number) =>
                        <DropdownMenuButton
                            key={index}
                            $size={size}
                            onClick={(e: any) => handleOpen(e, item)}>
                            {(stringify) ? item : item?.title}
                        </DropdownMenuButton>)}
                </DropdownMenu>}
        </DropdownButton>
    )
};

export default DropdownComponent;