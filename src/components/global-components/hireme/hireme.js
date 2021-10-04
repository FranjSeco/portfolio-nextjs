import React from "react";
import { Button, CopiedWrapper, Overlay, CloseBtn, CopiedText } from "./hireme.style";

export const Hireme = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [isDisplayed, setIsdisplayed] = React.useState("none");

  const copy = async () => {
    await navigator.clipboard.writeText("franjseco@gmail.com");
    setOpen(true);
    setIsdisplayed("flex");
  };

  return (
    <>
      <Button
        className={className}
        onClick={() => {
          setOpen(true);
          setIsdisplayed("flex");
          copy();
        }}>
        Contact me!
      </Button>

      {open && (
        <Overlay isDisplayed={isDisplayed}>
          <CopiedWrapper>
            <CloseBtn
              onClick={() => {
                setOpen(false);
              }}>
              <div />
              <div />
            </CloseBtn>
            <CopiedText>
              Email Copied, <br />
              <br />
              Contact me!
            </CopiedText>
          </CopiedWrapper>
        </Overlay>
      )}
    </>
  );
};
