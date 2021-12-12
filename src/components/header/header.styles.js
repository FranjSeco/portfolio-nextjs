import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.nav`
  width: 100%;
  height: ${(props) => (props.isScrolling ? "55px" : "70px")};
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  z-index: 3;
  padding-right: 20px;
  align-self: flex-start;
  background-color: ${(props) =>
    props.isScrolling ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"};

  color: ${(props) => (props.isScrolling ? "#000" : "rgba(0, 0, 0, 1)")};

  box-shadow: ${(props) => (props.isScrolling ? "2px 2px 15px 2px #000000" : "none")};
  transition: all 0.2s, background-color 0.6s 0.05s, padding-bottom 0.3s;

  @media screen and (max-width: 761px) {
    box-shadow: ${(props) => (props.isScrolling ? "2px 2px 15px 2px #000000" : "none")};
    box-shadow: none;
  }

  @media screen and (max-width: 830px) {
    height: ${(props) => (props.isScrolling ? "35px" : "50px")};
    padding: 2px 20px 0 20px;
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

export const MenuWrapperLow = styled(motion.div)`
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
`;

export const NavMenu = styled(motion.div).attrs({ className: "navbar" })`
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

export const NavLink = styled(motion.a)`
  font-size: 3rem;
  font-weight: 700;
  line-height: 32px;
  z-index: 10010000;
  /* text-transform: uppercase; */
  transition-property: transform border-bottom;
  transition-timing-function: ease-in-out;
  transition-duration: 0.1s;
  margin: auto 10px;
  border-bottom: none;
  position: relative;
  color: ${(props) => (props.isScrolling ? "#000" : "#fff")};

  &:after {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    z-index: 100100000;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 50%;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }

  @media screen and (max-width: 830px) {
    font-size: 2rem;
    font-weight: 600;
  }

  @media screen and (max-width: 761px) {
    color: #000;
    margin: 10px 0;
    &:hover {
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
