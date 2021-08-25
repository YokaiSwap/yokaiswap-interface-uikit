import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";
import { LangType } from "../types";
import MenuButton from "./MenuButton";

const StyledLangButton = styled(Button)`
  padding: 0;
`;

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="top-right"
    target={
      <StyledLangButton variant="text" startIcon={<LanguageIcon color="textSubtle" width="22px" />}>
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
      </StyledLangButton>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.code}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
