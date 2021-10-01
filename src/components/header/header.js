import Link from "next/link";
import React from "react";
import { Burger } from "../burger/burger";

import {
  Container,
  Logo,
  AnchorLogo,
  NavMenu,
  NavLink,
  Disc,
  BurgerWrapper,
  MenuWrapperLow,
  Overlay,
} from "./header.styles";

export const Header = () => {
  const [isScrolling, setIsScrolling] = React.useState(false);
  function handleScroll() {
    if (window.scrollY > 20) {
      setIsScrolling(true);
    } else setIsScrolling(false);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // BURGER BTN
  const [isDisplayed, setIsDisplayed] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [getWidth, setGetWidth] = React.useState();

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
  }, []);

  const handleBurger = () => {
    setIsDisplayed(isDisplayed === false);
  };

  return (
    <Container isScrolling={isScrolling}>
      <Logo>
        <Link href="#intro" passHref>
          <AnchorLogo>
            <Disc />
          </AnchorLogo>
        </Link>
      </Logo>
      {getWidth < 761 ? (
        <>
          <BurgerWrapper onClick={() => handleBurger()}>
            <Burger open={open} setOpen={setOpen} isScrolling={isScrolling} />
          </BurgerWrapper>
          {isDisplayed && (
            <Overlay isDisplayed={isDisplayed}>
              <MenuWrapperLow>
                <NavMenu>
                  <Link href="#intro" passHref>
                    <NavLink>Intro</NavLink>
                  </Link>
                  <Link href="#tech" passHref>
                    <NavLink>Technologies</NavLink>
                  </Link>
                  <Link href="#projects" passHref>
                    <NavLink>Projects</NavLink>
                  </Link>
                  <Link href="#about" passHref>
                    <NavLink>About</NavLink>
                  </Link>
                </NavMenu>
              </MenuWrapperLow>
            </Overlay>
          )}
        </>
      ) : (
        <NavMenu>
          <Link href="#intro" passHref>
            <NavLink>Intro</NavLink>
          </Link>
          <Link href="#tech" passHref>
            <NavLink>Technologies</NavLink>
          </Link>
          <Link href="#projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
          <Link href="#about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </NavMenu>
      )}
    </Container>
  );
};
