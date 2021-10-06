import React from "react";
import { Burgerbtn } from "./burger.styles";

export const Burger = ({ open, setOpen, isScrolling }) => {
  const [bgColor, setBgColor] = React.useState("#fff");

  React.useEffect(() => {
    if (isScrolling === true) {
      setBgColor("#000");
    } else {
      setBgColor("#fff");
    }
  }, [isScrolling]);

  function handleBg() {
    if (!isScrolling) {
      setBgColor(bgColor === "#fff" ? "#000" : "#fff");
    } else if (isScrolling && bgColor === "#fff") {
      setBgColor("#000");
    }
  }
  return (
    <Burgerbtn
      open={open}
      onClick={() => {
        setOpen(!open);
        handleBg();
      }}
      isScrolling={isScrolling}>
      <div style={{ backgroundColor: `${bgColor}` }} />
      <div style={{ backgroundColor: `${bgColor}` }} />
      <div style={{ backgroundColor: `${bgColor}` }} />
    </Burgerbtn>
  );
};
