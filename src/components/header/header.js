// ARREGLAR FRAMER NOTION

import Link from "next/link";
import React from "react";
import { Burger } from "../burger/burger";

import { sideNavAnim, easeInBottomAnim, staggerOptions, VARIANTS } from "../../styles/animations";

import {
  Container,
  NavMenu,
  NavLink,
  BurgerWrapper,
  MenuWrapperLow,
  Overlay,
} from "./header.styles";

export const Header = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [isDisplayed, setIsDisplayed] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [getWidth, setGetWidth] = React.useState();

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else setIsScrolling(false);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // BURGER BTN

  const updateDimensions = () => {
    setGetWidth(window.innerWidth);
  };

  React.useEffect(() => {
    updateDimensions();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
    return undefined;
  }, []);

  const handleBurger = () => {
    setIsDisplayed(isDisplayed === false);
  };

  return (
    <>
      <Container isScrolling={isScrolling} open={open}>
        {getWidth < 761 ? (
          <>
            <BurgerWrapper onClick={() => handleBurger()}>
              <Burger
                open={open}
                setOpen={setOpen}
                setIsScrolling={setIsScrolling}
                isScrolling={isScrolling}
              />
            </BurgerWrapper>
          </>
        ) : (
          <NavMenu>
            <Link href="#intro" passHref>
              <NavLink isScrolling={isScrolling}>Intro</NavLink>
            </Link>
            <Link href="#tech" passHref>
              <NavLink isScrolling={isScrolling}>Technologies</NavLink>
            </Link>
            <Link href="#projects" passHref>
              <NavLink isScrolling={isScrolling}>Projects</NavLink>
            </Link>
            <Link href="#about" passHref>
              <NavLink isScrolling={isScrolling}>About</NavLink>
            </Link>
          </NavMenu>
        )}
      </Container>
      {getWidth < 761 && (
        <>
          {isDisplayed && (
            <Overlay isDisplayed={isDisplayed}>
              <MenuWrapperLow
                initial={false}
                animate={open ? VARIANTS.OPEN : VARIANTS.CLOSED}
                exit={VARIANTS.CLOSED}
                {...sideNavAnim}>
                <NavMenu variants={staggerOptions.variants}>
                  <Link href="#intro" passHref>
                    <NavLink burger {...easeInBottomAnim}>
                      Intro
                    </NavLink>
                  </Link>
                  <Link href="#tech" passHref>
                    <NavLink burger {...easeInBottomAnim}>
                      Technologies
                    </NavLink>
                  </Link>
                  <Link href="#projects" passHref>
                    <NavLink burger {...easeInBottomAnim}>
                      Projects
                    </NavLink>
                  </Link>
                  <Link href="#about" passHref>
                    <NavLink burger {...easeInBottomAnim}>
                      About
                    </NavLink>
                  </Link>
                </NavMenu>
              </MenuWrapperLow>
            </Overlay>
          )}
        </>
      )}
    </>
  );
};
