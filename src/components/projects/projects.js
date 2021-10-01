import React from "react";
import Image from "next/image";
import {
  Container,
  Title,
  ProjectsGrid,
  Overlay,
  ProjectsContainer,
  InfoCardWrapper,
  ProjectTitle,
  InfoCard,
  ProjectCardWrapper,
  ProjectLink,
  ProjectStack,
  CloseBtn
}
  from "./projects.styles";

import { Wrapper } from '../global-components/global-components';

import { ProjectCard } from '../global-components/project-card/project-card';

import primuImage from "../../../public/images/primu.png";
import apiaryImage from "../../../public/images/apiary.png";
import aroundBeImage from "../../../public/images/aroundusbackend.png";
import aroundExImage from "../../../public/images/aroundusexternalapi.png";
import portlandImage from "../../../public/images/portland.png";
import worldsNewsImage from "../../../public/images/worldsnews.png";

const projectsData = [
  {
    src: 'https://prim-u.vercel.app/',
    cover: primuImage,
    title: 'Prim-U',
    stack: 'NextJS, Styled-Components, Contentfull',
    textOne: 'Prim-U is a beauty & wellness, platform that connects professional service providers and suppliers with curstomers. This was the first project ever I had the oportunity to see the entire process from beggining to the end, starting with the figma design handled by the the web designer, until the presentation of our work to the owner of the company.',
    repo: 'https://github.com/enyelsequeira/prim-u'
  },
  {
    src: 'https://franjseco.github.io/apiary/',
    cover: apiaryImage,
    title: 'Apiary',
    stack: 'NextJS, Styled-Components, Contentfull',
    textOne: 'Prim-U is a beauty & wellness, platform that connects professional service providers and suppliers with curstomers. This was the first project ever I had the oportunity to see the entire process from beggining to the end, starting with the figma design handled by the the web designer, until the presentation of our work to the owner of the company.',
    repo: 'https://github.com/olivcamj/apiary'
  },
  {
    src: 'https://world-news.students.nomoreparties.site/',
    cover: worldsNewsImage,
    title: 'World`s news',
    stack: 'NextJS, Styled-Components, Contentfull',
    textOne: 'Prim-U is a beauty & wellness, platform that connects professional service providers and suppliers with curstomers. This was the first project ever I had the oportunity to see the entire process from beggining to the end, starting with the figma design handled by the the web designer, until the presentation of our work to the owner of the company.',
    repo: 'https://github.com/FranjSeco/news-explorer-frontend/tree/stage-3'
  },
  {
    src: 'https://franjseco.github.io/web_project_3/',
    cover: portlandImage,
    title: 'From Portland to Portland',
    textOne: 'Prim-U is a beauty & wellness, platform that connects professional service providers and suppliers with curstomers. This was the first project ever I had the oportunity to see the entire process from beggining to the end, starting with the figma design handled by the the web designer, until the presentation of our work to the owner of the company.',
    repo: 'https://github.com/FranjSeco/web_project_3'
  },
  {
    src: 'https://franjseco.github.io/web_project_4/',
    cover: aroundExImage,
    title: 'Around US Practicums Api',
    stack: 'NextJS, Styled-Components, Contentfull',
    textOne: 'Prim-U is a beauty & wellness, platform that connects professional service providers and suppliers with curstomers. This was the first project ever I had the oportunity to see the entire process from beggining to the end, starting with the figma design handled by the the web designer, until the presentation of our work to the owner of the company.',
    repo: 'https://github.com/FranjSeco/web_project_4'
  },
  {
    src: 'https://serene-panini-fd9869.netlify.app',
    cover: aroundBeImage,
    title: 'Around US Sign Up and Sign In',
    stack: 'NextJS, Styled-Components, Contentfull',
    textOne: 'Prim-U is a beauty & wellness, platform that connects professional service providers and suppliers with curstomers. This was the first project ever I had the oportunity to see the entire process from beggining to the end, starting with the figma design handled by the the web designer, until the presentation of our work to the owner of the company.',
    repo: 'https://github.com/FranjSeco/react-around-api-full'
  },
];

export const Projects = () => {
  const [elementInOverlay, setElementInOverlay] = React.useState({});
  const [isDisplayed, setIsdisplayed] = React.useState('none');
  const [open, setOpen] = React.useState(false);

  return (
    <Wrapper white id="projects">
      <Title>My projects</Title>
      <Container>

        <ProjectsGrid>
          {projectsData.map((element, i) => {
            return (
              <ProjectCard
                key={i}
                element={element}
                setIsdisplayed={setIsdisplayed}
                setOpen={setOpen}
                setElementInOverlay={setElementInOverlay}
              />
            )
          })}

        </ProjectsGrid>

        {open && <Overlay
          isDisplayed={isDisplayed}
        >
          <ProjectsContainer>
            <CloseBtn onClick={() => {
              setOpen(false);
            }}
            >
              <div />
              <div />
            </CloseBtn>
            <ProjectCardWrapper>
              <Image
                layout="intrinsic"
                objectFit="fill"
                src={elementInOverlay.cover}
                alt={elementInOverlay.title}
              />
            </ProjectCardWrapper>

            <InfoCardWrapper>
              <ProjectTitle>{elementInOverlay.title}</ProjectTitle>
              <ProjectStack>{elementInOverlay.stack}</ProjectStack>
              <InfoCard>{elementInOverlay.textOne}</InfoCard>
              <ProjectLink target="_blank" href={elementInOverlay.repo}>Github repository</ProjectLink>
              <ProjectLink target="_blank" href={elementInOverlay.src}>Link for the web</ProjectLink>
            </InfoCardWrapper>
          </ProjectsContainer>
        </Overlay>}
      </Container>

    </Wrapper>

  );
};
