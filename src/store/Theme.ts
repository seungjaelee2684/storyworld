import { atom } from "recoil";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('sr_theme');
  return savedTheme !== null ? parseInt(savedTheme, 10) : 0;
};

export const themeSelector = atom({
  key: 'themeSelector',
  default: getInitialTheme()
});