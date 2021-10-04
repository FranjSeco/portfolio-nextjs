import React from "react";
import { Button, CopiedWrapper, Overlay, CloseBtn, CopiedText } from "./hireme.style";

export const Hireme = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [isDisplayed, setIsdisplayed] = React.useState("none");
  return (
    <>
      <Button
        className={className}
        onClick={() => {
          setOpen(true);
          setIsdisplayed("flex");
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
