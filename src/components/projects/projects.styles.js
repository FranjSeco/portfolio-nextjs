import styled, { css } from "styled-components";
import Image from "next/image";
import GlobalCard from "../global-components/global-card/global-card";

export const Container = styled.div`
  width: 100%;
  /* height: 900px; */
  /* background-color: rgb(10, 25, 47); */
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
  padding: 0 0 50px 0;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 60px;
  line-height: 80px;
  margin: 0 0 30px 0;
  display: inline-block;
  z-index: 1;
`;

export const ProjectsGrid = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto(2, 1fr);
  grid-gap: 0;
  margin: 0 auto;
  place-content: center;
`;

export const ProjectCards = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 3.2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  /* border-radius: 5px; */

  &:hover {
    background-color: rgb(17, 34, 64);
  }
`;
export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: justify;

  transition-property: background-color font-size;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    font-size: 0rem;
  }
`;

export const ProjectName = styled.h3.attrs({ className: "project-title" })`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  /* font-size: 3rem; */
  font-weight: 900;
  color: #fbc531;
  transition-property: background-color font-size;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
`;

export const CloseBtn = styled.div`
  background-color: #000;
  position: absolute;
  top: -40px;
  right: -40px;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  align-items: space-between;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-duration: 0.1s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  div {
    width: 3rem;
    height: 0.25rem;
    background-color: #fff;
    position: fixed;

    :first-child {
      transform: translateY(15px) rotate(45deg);
    }

    :nth-child(2) {
      transform: translateY(15px) rotate(-45deg);
    }

  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.isDisplayed)};
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: fixed;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  height: auto;
  &:hover {
    background-color: rgb(17, 34, 64);
  }
`;

export const ProjectsContainer = styled.div`
  margin: auto;
  width: 80%;
  height: 50%;
  background-color: #273c75;
  padding: 5px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-self: center;
  justify-content: center;
  align-content: center;
  align-self: center;
  box-sizing: border-box; 
  border-radius: 5px;
  column-gap: 5px;
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  &:hover {
    /* cursor: pointer; */
  }
`;


export const InfoCardWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  row-gap: 10px;
  z-index: 5;
  background-color: rgba(17, 34, 64, 1);
`;


export const InfoCard = styled(GlobalCard).attrs({ className: "info-card" })`
  width: 80%;
  margin: 20px auto;
  background-color: rgb(17, 34, 64);
  box-shadow: rgba(0, 0, 0, 0.7) 2.4px 2.4px 3.2px;
  position: relative;
  border-radius: 5px;
  align-self: flex-start;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-content: flex-start;

  &:last-child {
    justify-content: space-between;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 2.5rem;
  margin: ${(props) => props.right ? '0 auto 0 0' : '0 0 0 auto'};
  padding: 20px;
`;

export const ProjectStack = styled.p`
    font-size: 2rem;
    margin: ${(props) => props.right ? '0 auto 0 20px' : '0 20px 0 auto'};
`;

export const ProjectLink = styled.a.attrs({ className: "info-link" })`
  padding: 20px;
  position: absolute;
  bottom: 0;
  &:hover {
    color: #a4b0be;
    cursor: pointer;
  }

  &:last-child {
    right: 0;
  }
`;

