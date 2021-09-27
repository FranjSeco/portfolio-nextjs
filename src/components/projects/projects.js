import React from "react";
import Image from "next/image";
import {
  Container,
  Title,
  ProjectsGrid,
  ProjectCards,
  ImageWrapper,
  ProjectOverlay,
  Overlay,
  ProjectsContainer,
  InfoCardWrapper,
  ProjectTitle,
  InfoCard,
  ProjectCardWrapper,
  ProjectLink,
  ProjectStack,
  CloseBtn,
  ProjectName
}
  from "./projects.styles";

import { Wrapper } from '../global-components/global-components';
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
  const [isDisplayed, setIsdisplayed] = React.useState('none');
  const [open, setOpen] = React.useState(false);
  const [elementInOverlay, setElementInOverlay] = React.useState({});
  const [fontSize, setFontSize] = React.useState('3rem');

  function handleTextOnHover() {
    setFontSize('0rem');
  }

  function handleTextAfterHover() {
    setFontSize('3rem');
  }

  return (
    <Wrapper transparent id="projects">
      <Container>
        <Title>My projects</Title>
        <ProjectsGrid>
          {projectsData.map((element, i) => {
            return (
              <ProjectCards key={i} onClick={() => {
                setElementInOverlay(element);
                setIsdisplayed('flex');
                setOpen(true);
              }}
              onMouseEnter={() => handleTextOnHover()}
              onMouseLeave={() => handleTextAfterHover()}
              >
                <ProjectOverlay>
                  <ProjectName
                    style={{ fontSize: `${fontSize}` }}
                  >{element.title}</ProjectName>
                </ProjectOverlay>
                <ImageWrapper>
                  <Image
                    layout="intrinsic"
                    objectFit="cover"
                    src={element.cover}
                    alt="primu"
                  />
                </ImageWrapper>
              </ProjectCards>
            )
          })}

        </ProjectsGrid>

        {open && <Overlay
          isDisplayed={isDisplayed}
        >
          <ProjectsContainer>
            <CloseBtn onClick={() => {
              setOpen(false);
            }}>
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



        {/* {projectsData.map((element, i) => {
          return i % 2 === 0 ? (
            <ProjectsContainer key={i}>
              <ProjectCardWrapper>
                <Image
                  layout="intrinsic"
                  objectFit="fill"
                  src={element.cover}
                  alt="primu"
                />
              </ProjectCardWrapper>

              <InfoCardWrapper>
                <InfoWrapper>
                  <ProjectTitle>{element.title}</ProjectTitle>
                  <ProjectStack>{element.stack}</ProjectStack>
                  <InfoCard>{element.textOne}</InfoCard>
                  <ProjectLink target="_blank" href={element.repo}>Github repository</ProjectLink>
                  <ProjectLink target="_blank" href={element.src}>Link for the web</ProjectLink>
                </InfoWrapper>
              </InfoCardWrapper>
            </ProjectsContainer>
          ) : (
            <ProjectsContainer right key={i}>
            <ProjectCardWrapper>
              <Image
                layout="intrinsic"
                objectFit="fill"
                src={element.cover}
                alt="primu"
              />
            </ProjectCardWrapper>

            <InfoCardWrapper right>
              <InfoWrapper right>
                <ProjectTitle right>{element.title}</ProjectTitle>
                <ProjectStack right>{element.stack}</ProjectStack>
                <InfoCard right>{element.textOne}</InfoCard>
                <ProjectLink target="_blank" href={element.repo}>Github repository</ProjectLink>
                <ProjectLink target="_blank" href={element.src}>Link for the web</ProjectLink>
              </InfoWrapper>
            </InfoCardWrapper>
          </ProjectsContainer>
          )
        })} */}
      </Container>

    </Wrapper>

  );
};
