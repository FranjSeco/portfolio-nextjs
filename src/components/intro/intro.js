import React from "react";
import {
  Container,
  Img,
  Paragraph,
  Title,
  Subtitle,
  Text,
  IntroWrapper,
  HiremeIntro,
} from "./intro.styles";
// import { BgAnimation } from '../../components/bgAnimation/bgAnimation'

import introImage from "../../../public/images/bg-water.jpg";

export const Intro = () => {
  return (
    <Container id="intro">
      <Img
        src={introImage}
        layout="fill"
        objectFit="cover"
        quality="100"
        alt="IntroImage"
        placeholder="blur"
        blurDataURL={introImage}
        priority="true"
      />
      {/* <SectionAnimation>
                <BgAnimation />
            </SectionAnimation> */}

      <IntroWrapper>
        <Paragraph>Hi, my name is</Paragraph>
        <Title>Francisco Seco</Title>
        {/* <Subtitle>I build things for the web.</Subtitle> */}
        <Text>
          I'm full-stack developer specializing in building web experiences with React and NodeJs. Currently, I'm focused on building accessible and meaningful webs.
        </Text>
        <HiremeIntro />
      </IntroWrapper>
    </Container>
  );
};
