import { GiHighGrass } from "react-icons/gi";
import { GiBattleAxe } from "react-icons/gi";
import { PiCastleTurretFill } from "react-icons/pi";
import One from '../assets/images/background.webp';
import Two from '../assets/images/background2.webp';
import Three from '../assets/images/background3.webp';

export const themes = [
  { icon: <GiHighGrass />, name: 'Field' },
  { icon: <GiBattleAxe />, name: 'Battle' },
  { icon: <PiCastleTurretFill />, name: 'Castle' },
];

export const themeBackgrounds = [
  { name: 'Field', image: One },
  { name: 'Battle', image: Two },
  { name: 'Castle', image: Three }
];