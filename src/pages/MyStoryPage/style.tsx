import { StyledEngineProvider } from "@mui/material";
import styled from "styled-components";

export const StoryPageLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 80px;
`;

export const StoryTitleWrapper = styled.div`
  width: 90%;
  min-height: 1px;
  height: 1px;
  position: relative;
  background: linear-gradient(to right, transparent 0%, #ebe0bd 20%, #d8b952 50%, #ebe0bd 80%, transparent 100%);
`;

export const StoryTitleBox = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  background-image: radial-gradient(
    circle at center,
    #d8b952,
    #dfc983
  );
  position: absolute;
  top: -20px;
  left: calc(50% - 150px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border: 2px solid #e4dcc2;
  box-shadow: 2px 2px 4px 0px #6d5812 inset;
  color: #fff9e3;
  text-shadow: #6d581280 2px 2px 4px;
  user-select: none;
`;

export const StoryTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
`;

export const TitleBar = styled.span`
  width: 4px;
  height: 100%;
  border-radius: 10px;
  background-color: #6d5812;
  box-shadow: 1px 1px 2px 0px #382d07;
`;

export const StoryListContainer = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #fefefec0;
  border-radius: 10px;
  padding: 40px;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 80px;
  min-height: 80px;
  background-color: #222020;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
`;

export const TableHeaderLeftWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export const TableHeaderRightWrapper = styled.div`
  min-width: 400px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Expired = styled.div`
  width: 100px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const StoryLaneContainer = styled.li`
  width: 100%;
  height: 60px;
  min-height: 60px;
  background-color: #fefefe;
  padding: 0px 12px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const LaneLink = styled.a`
  width: 100%;
  height: 100%;
  /* border: 2px solid #c5a663; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 0px 12px;
  border-top: 1px solid #c0c0c0;
`;

export const LaneTitle = styled.h2`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-left: 16px;
  color: #222020;
  display: flex;
  justify-content: start;
`;

export const BottomLane = styled.div`
  min-width: 400px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GenreTag = styled.span<{ $color: string }>`
  width: 100px;
  height: 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${(props) => props.$color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubText = styled.span`
  width: 100px;
  font-size: 16px;
  color: #222020;
`;