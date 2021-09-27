import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { Container, SocialIconsWrapper, IconsLink } from "./socialIcons.styles";

export const SocialIcons = () => {
  const copy = async () => {
    await navigator.clipboard.writeText("franjseco@gmail.com");
    alert("The Email has been copied!");
  };

  return (
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
  );
};
