import styled from "styled-components";

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
    border-radius: 5px;

    &:hover {
        background-color: rgb(17, 34, 64);
    }

    @media screen and (max-width: 680px) {
      height: 200px;
  }
`;


export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.9);
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
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  display: visible;
  transition-property: background-color font-size display;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
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

export const ViewProject = styled.div`
  width: 100px;
  height : 100px;
  border-radius: 50%;
  background-color: rgb(27, 44, 74);
  box-shadow: rgba(0, 0, 0, 0.75) 5px 5px 3.2px;
  text-align: center;
  align-items: center;
  transition-property: display;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  display: ${(props) => props.viewProject ? 'flex' : 'none'};
`;

export const ViewProjectText = styled.p`
  width: 50%;
  text-transform: uppercase;
  color: #fff;
  font-size: 1rem;
  font-weight: bolder;
  margin: auto;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 3.2px;

  &:hover {
    transform: scale(1.3);
  }
`;




