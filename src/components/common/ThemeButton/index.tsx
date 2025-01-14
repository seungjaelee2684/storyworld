import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import React from 'react'
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import { themes } from '../../../modules/themes';
import { useSetRecoilState } from 'recoil';
import { themeSelector } from '../../../store/Theme';

const ThemeButton = () => {

  const setTheme = useSetRecoilState(themeSelector);

  const themeSelectHandler = (theme: number) => {
    setTheme(theme);
    localStorage.setItem('sr_theme', String(theme));
  };

  return (
    <Box
      style={{ position: 'fixed', bottom: '10px', right: '10px' }}
      sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<PiSelectionBackgroundDuotone size={24} />}
      >
        {themes.map((theme, index) => (
          <SpeedDialAction
            key={theme.name}
            icon={theme.icon}
            tooltipTitle={theme.name}
            onClick={() => themeSelectHandler(index)}
          />
        ))}
      </SpeedDial>
    </Box>
  )
};

export default ThemeButton;