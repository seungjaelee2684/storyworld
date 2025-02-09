import styled from "styled-components";
import { light_blue, light_blue_black, light_blue_heavy, light_blue_strong } from "../../../../styles/color_pallete";

export const SearchInputContainer = styled.form<{
  $full: boolean,
}>`
  width: ${(props) => props.$full ? '100%' : '300px'};
  height: 38px;
  border: 1px solid ${light_blue};
  outline: none;
  background-color: ${light_blue};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0px 16px;
  box-sizing: border-box;
  transition: all 0.2s;

  &:focus-within {
    border: 1px solid ${light_blue_heavy};
  }
`;

export const SearchIcon = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${light_blue_black};
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;
  color: ${light_blue_black};

  &::-webkit-search-cancel-button {
    opacity: 0.5;
    cursor: pointer;
  }
  
  &::placeholder {
    color: ${light_blue_strong};
  }
`;