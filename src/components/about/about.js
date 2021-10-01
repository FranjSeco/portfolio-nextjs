import React from "react";
import { Wrapper } from "../global-components/global-components";
import { Container, Title, TextWrapper, AboutText } from "./about.styles";

export const About = () => {
  return (
    <Wrapper white id="about">
      <Title>About</Title>
      <Container>
        <TextWrapper>
          <AboutText>
            I&apos;m certified web developer specialized in React and Node.js, capable of build the
            front and the back-end. I consider myself a very motivated and hard worker person, with
            an eye for the detail. I understand the importance of the design, therefore I try to
            always develop the projects I work on with a mobile first approach. Responsiveness is
            key in all the projects I participate.
            <br />
            <br />
            If my work has caught your attention, please do not hesitate to contact me.
            <br />
            <br />
            I’m interested in a full time remote position within a company that allows me to keep
            growing and improving myself.
          </AboutText>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};
