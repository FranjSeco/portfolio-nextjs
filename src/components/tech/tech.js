import React from "react";
import { Wrapper } from "../global-components/global-components";
import {
  Title,
  Container,
  TechWrapper
} from "./tech.styles";

export const Tech = () => {
  return (
    <Wrapper dark>
      <Title>Technologies</Title>
      <Container id="tech">

        <TechWrapper></TechWrapper>
        <TechWrapper></TechWrapper>
        <TechWrapper></TechWrapper>
      </Container>
    </Wrapper>

  );
};
