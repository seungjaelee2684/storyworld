import { BottomNavigationAction, BottomNavigation } from '@mui/material';
import React, { useState } from 'react'
import { BsPersonLinesFill } from 'react-icons/bs';
import { MdMenuBook } from 'react-icons/md';
import { CharacterTapContainer, ContentTapContainer } from './style';

const ContentTap = () => {

  const [value, setValue] = useState<number>(0);

  return (
    <ContentTapContainer>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="story" icon={<MdMenuBook />} />
        <BottomNavigationAction label="character" icon={<BsPersonLinesFill />} />
      </BottomNavigation>
      {(value === 1)
        && <CharacterTapContainer>
        </CharacterTapContainer>}
    </ContentTapContainer>
  )
};

export default ContentTap;