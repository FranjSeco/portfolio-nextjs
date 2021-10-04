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
            I&apos;m certified web developer, focused on delivering well made pages with the latest
            approaches in the market. Well aware of the needs of modern web development, I&apos;m
            planing to grow my stack with React Native and TypeScript as soon as possible, in order
            to match the current job&apos;s needs. I consider myself a very motivated and hard
            worker person, with an eye for the detail. I understand the importance of the design,
            therefore I always try to pay extra attention to mobile design and and the
            responsiveness for the different resolutions.
            <br />
            <br />
            If my work has caught your attention, please do not hesitate to contact me.
            <br />
            <br />
            I’m interested in a full time remote (or partially remote) position in a company that
            allows me to keep growing and improving myself as web developer.
          </AboutText>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};
