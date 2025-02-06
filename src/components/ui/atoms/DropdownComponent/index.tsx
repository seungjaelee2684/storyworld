import React, { useEffect, useRef, useState } from 'react'
import { DropdownButton, DropdownMenu, DropdownMenuButton } from './style';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface DropdownComponentProps {
    fullWidth?: boolean | undefined;
    size?: string;
    state: string;
    action: React.Dispatch<React.SetStateAction<string>>;
    options: any[];
    style?: React.CSSProperties;
};

const DropdownComponent = ({
    fullWidth,
    size = 'medium',
    state,
    action,
    options,
    style
}: DropdownComponentProps) => {

    const dropdownRef = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const openFunc = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open)
    };

    const handleOpen = (e: any, item: string) => {
        e.preventDefault();
        e.stopPropagation();
        action(item)
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
            $size={size}
            $open={open}
            style={style}
            ref={dropdownRef}>
            {(state !== '') ? state : '선택해주세요'}
            {(open) ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            {(open)
                && <DropdownMenu
                    $size={size}>
                    {options?.map((item: string, index: number) =>
                        <DropdownMenuButton
                            key={index}
                            $size={size}
                            onClick={(e: any) => handleOpen(e, item)}>
                            {item}
                        </DropdownMenuButton>)}
                </DropdownMenu>}
        </DropdownButton>
    )
};

export default DropdownComponent;