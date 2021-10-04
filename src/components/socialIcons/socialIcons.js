import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import {
  Container,
  SocialIconsWrapper,
  IconsLink,
  CopiedWrapper,
  Overlay,
  CloseBtn,
  CopiedText
} from "./socialIcons.styles";

export const SocialIcons = () => {
  const [open, setOpen] = React.useState(false);
  const [isDisplayed, setIsdisplayed] = React.useState("none");

  const copy = async () => {
    await navigator.clipboard.writeText("franjseco@gmail.com");
    setOpen(true);
    setIsdisplayed("flex");
  };



  return (
    <>
      <Container>
        <SocialIconsWrapper>
          <IconsLink onClick={copy}>
            <AiOutlineMail size="4rem" />
          </IconsLink>
          <IconsLink href="https://github.com/FranjSeco" target="_blank">
            <AiFillGithub size="4rem" />
          </IconsLink>
          <IconsLink href="https://www.instagram.com/frankalexandersupertramp/" target="_blank">
            <AiFillInstagram size="4rem" />
          </IconsLink>
          <IconsLink href="https://www.linkedin.com/in/franjseco/" target="_blank">
            <AiFillLinkedin size="4rem" />
          </IconsLink>
        </SocialIconsWrapper>
      </Container>

      {open && (
        <Overlay isDisplayed={isDisplayed}>
          <CopiedWrapper>
            <CloseBtn
              onClick={() => {
                setOpen(false);
              }}>
              <div />
              <div />
            </CloseBtn>
            <CopiedText>
              Email Copied, <br/><br/>Contact me!
              </CopiedText>
            

          </CopiedWrapper>
        </Overlay>
      )}

    </>
  );
};
