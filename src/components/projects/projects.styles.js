import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 900px; */
  /* background-color: rgb(10, 25, 47); */
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h2`
  color: #000;
  font-weight: 900;
  font-size: 60px;
  line-height: 80px;
  margin: 0 0 30px 0;
  display: inline-block;
  align-self: flex-start;
  z-index: 1;

  @media screen and (max-width: 500px) {
    font-size: 40px;
    margin: 0 0 20px 0;
  }
`;

export const ProjectsGrid = styled.div`
  /* max-width: 1280px; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto(2, 1fr);
  grid-gap: 30px;
  margin: 0 auto;
  place-content: center;
  padding: 10px;
`;

export const Overlay = styled.div`
  display: ${(props) => props.isDisplayed};
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

export const ProjectsContainer = styled.div`
  margin: auto;
  width: 80%;
  height: 50%;
  /* background-color: #273c75; */
  background-color: rgba(255, 255, 255, 0.7);
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
  /* overflow: hidden; */

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    height: 90%;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
    height: 70%;
  }
`;

export const CloseBtn = styled.div.attrs({ className: "close-btn" })`
  background-color: transparent;
  position: absolute;
  z-index: 20000;
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

    @media screen and (max-width: 450px) {
      height: 0.3rem;
    }
  }

  @media screen and (max-width: 450px) {
    top: -40px;
    right: -5px;
  }
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1060px) {
    height: 70%;
  }
  @media screen and (max-width: 920px) {
    height: 60%;
  }

  @media screen and (max-width: 490px) {
    height: 50%;
  }

  @media screen and (max-width: 390px) {
    height: 40%;
  }
`;

export const InfoCardWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  row-gap: 10px;
  z-index: 5;
  /* background-color: rgba(17, 34, 64, 1); */
  background-color: rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 1060px) {
    justify-content: flex-start;
    height: 30%;
  }
  @media screen and (max-width: 920px) {
    height: 40%;
  }
  @media screen and (max-width: 490px) {
    height: 50%;
  }

  @media screen and (max-width: 390px) {
    height: 60%;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 2.5rem;
  margin: 0 0 0 auto;
  padding: 20px;

  @media screen and (max-width: 1060px) {
    padding: 10px 10px 0 10px;
  }
`;

export const ProjectStack = styled.p`
  font-size: 2rem;
  margin: 0 20px 20px auto;

  @media screen and (max-width: 1060px) {
    font-size: 1.5rem;
    margin: 0 10px 0 auto;
  }

  @media screen and (max-width: 415px) {
    font-size: 1.5rem;
    margin: 0 auto 0 10px;
  }
`;

export const InfoCard = styled.div.attrs({ className: "info-card" })`
  width: 90%;
  margin: 0 20px auto auto;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.7) 2.4px 2.4px 3.2px;
  position: relative;
  border-radius: 5px;
  align-self: flex-start;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-content: flex-start;

  @media screen and (max-width: 1060px) {
    width: 97%;
    margin: 0 auto;
  }

  @media screen and (max-width: 415px) {
    font-size: 1.5rem;
  }
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

  @media screen and (max-width: 540px) {
    padding: 5px;
  }
`;
