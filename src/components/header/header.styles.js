import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";

export const Container = styled.nav`
  width: 100%;
  height: ${(props) => (props.isScrolling ? "55px" : "90px")};
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;
  padding-right: 20px;
  align-self: flex-start;
  background-color: ${(props) =>
    props.isScrolling ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)"};

  color: ${(props) => (props.isScrolling ? "#000" : "rgba(0, 0, 0, 1)")};

  box-shadow: ${(props) => (props.isScrolling ? "2px 2px 15px 2px #000000" : "none")};
  transition: all 0.2s, background-color 0.6s 0.05s, padding-bottom 0.3s;

  @media screen and (max-width: 761px) {
    box-shadow: ${(props) => (props.open ? "none" : "2px 2px 15px 2px #000000")};
  }

  @media screen and (max-width: 830px) {
    height: ${(props) => (props.isScrolling ? "35px" : "50px")};
    padding: 2px 20px 0 20px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  margin: 0 0 0 20px;
  align-self: center;
  cursor: pointer;
  @media screen and (max-width: 761px) {
    margin: 0;
  }
`;

export const Disc = styled(DiCssdeck)`
  transform: translateX(-10px);
  font-size: 6rem;

  @media screen and (max-width: 820px) {
    font-size: 3rem;
  }

  /* @media screen and (max-width: 320px) {
    font-size: 3rem;
  } */
`;

export const AnchorLogo = styled.a`
  display: inline-flex;
  align-items: center;
  color: #000;
  font-size: 3rem;
  font-weight: 900;
  &:hover {
    color: #505050;
  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.isDisplayed ? "flex" : "none")};
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 110vh;
  top: 0;
  left: 0;
`;

export const MenuWrapperLow = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 50px 20px 20px 20px;
  position: fixed;
  display: flex;
  top: 0;
  align-content: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  box-shadow: 5px 5px 15px 5px #000000;
  z-index: 1;
  /* transform: translate(-3px, -2px); */
  @media screen and (max-width: 760px) {
    box-sizing: border-box;
    width: 100%;
    right: 50%;
    transform: translateX(50%);
  }
  @media screen and (max-width: 320px) {
    top: 7rem;
  }
`;

export const NavMenu = styled.div.attrs({ className: "navbar" })`
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  z-index: 200;

  @media screen and (max-width: 761px) {
    flex-direction: column;
  }
`;

export const NavLink = styled.a`
  font-size: 3rem;
  font-weight: 900;
  line-height: 32px;
  z-index: 10010000;
  text-transform: uppercase;
  transition-property: transform border-bottom;
  transition-timing-function: ease-in-out;
  transition-duration: 0.1s;
  margin: auto 10px;
  border-bottom: none;
  &:hover {
    /* color: rgb(10, 25, 47); */
    /* color: ${(props) => (props.isScrolling ? "#000" : "rgba(255, 255, 255, 1)")}; */
    cursor: pointer;
    transform: translateY(-3px);
    border-bottom: ${(props) => (props.burger ? "none" : "2px solid #000")};
  }

  @media screen and (max-width: 830px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 761px) {
    margin: 10px 0;
    &:hover {
      /* color: rgb(10, 25, 47); */
      color: #000;
      cursor: pointer;
      transform: translateY(-3px);
    }
  }

  @media screen and (max-width: 640px) {
    font-size: 2rem;
    line-height: 24px;
  }

  @media screen and (max-width: 320px) {
    color: #000;
    margin: 10px 0;
  }
`;

export const BurgerWrapper = styled.div`
  z-index: 1;
  position: relative;
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 25px; */
`;
