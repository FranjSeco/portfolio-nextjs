import React from "react";

import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Nodedotjs } from "@styled-icons/simple-icons/Nodedotjs";
import { Express } from "@styled-icons/simple-icons/Express";
import { Postman } from "@styled-icons/simple-icons/Postman";
import { Jest } from "@styled-icons/simple-icons/Jest";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Heroku } from "@styled-icons/simple-icons/Heroku";
import { Python } from "@styled-icons/simple-icons/Python";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Netlify } from "@styled-icons/simple-icons/Netlify";
import { Vuejs } from "@styled-icons/boxicons-logos/Vuejs";
import { Angular } from "@styled-icons/simple-icons/Angular";
import { Java } from '@styled-icons/fa-brands/Java';
import {
  Title,
  Container,
  TechWrapper,
  TechTitleWrapper,
  TechStackTitle,
  Techs,
} from "./tech.styles";
import { Wrapper } from "../global-components/global-components";
// import {} from '';
// import {} from '';

export const Tech = () => {
  return (
    <Wrapper white id="tech">
      <Title>Technologies</Title>
      <Container>
        <TechWrapper>
          <TechTitleWrapper>
            <TechStackTitle>Front-End</TechStackTitle>
          </TechTitleWrapper>

          <Techs>
            <Javascript />
            <Typescript />
            <ReactLogo />
            <Angular />
            <Nextdotjs />
            <Styledcomponents />
            <Materialui />
            <TailwindCss />
            <Css3 />
            <Html5 />
            <Netlify />
          </Techs>
        </TechWrapper>
        <TechWrapper>
          <TechTitleWrapper>
            <TechStackTitle>Back-End</TechStackTitle>
          </TechTitleWrapper>

          <Techs>
            <Nodedotjs />
            <Express />
            <Postman />
            <Jest />
            <GoogleCloud />
            <Heroku />
          </Techs>
        </TechWrapper>
        <TechWrapper>
          <TechTitleWrapper>
            <TechStackTitle>Interested in</TechStackTitle>
          </TechTitleWrapper>
          <Techs>
            <Python />
            <Java />
            <Vuejs />
          </Techs>
        </TechWrapper>
      </Container>
    </Wrapper>
  );
};
