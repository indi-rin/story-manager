import styled from "styled-components";
import { colors } from "../../App.style";
import { SettingsOutline } from "@styled-icons/evaicons-outline";
import { BookOpen } from "@styled-icons/boxicons-regular";

export const Bar = styled.div`
  background-color: ${colors.umber};
  height: 100px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
`;

export const Projects = styled(BookOpen)`
  color: ${colors.olivine};
  padding-top: 25px;
  &:hover {
    color: ${colors.springBud};
  }
`;

export const Settings = styled(SettingsOutline)`
  color: ${colors.olivine};
  padding-top: 25px;
  &:hover {
    color: ${colors.springBud};
  }
`;

export const Header = styled.h1`
  color: ${colors.olivine};
  margin-top: 0px;
  padding-top: 25px;
  font-weight: normal;
  font-size: 40px;
`;
