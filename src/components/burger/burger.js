import React from 'react';
import { Burgerbtn } from "./burger.styles";

export const Burger = ({
  open,
  setOpen,
  isScrolling
}) => {

  return (
    <Burgerbtn open={open}
      onClick={() => {
        setOpen(!open);
      }
      }
      isScrolling={isScrolling}>
      <div />
      <div />
      <div />
    </Burgerbtn>
  );
};
