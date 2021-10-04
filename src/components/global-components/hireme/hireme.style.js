import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  margin: 0;

  &:hover {
    color: #fff;
    border: 1px solid #fff;
    box-shadow: 2px 2px 15px 2px #000000;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Overlay = styled.div`
  display: ${(props) => props.isDisplayed};
  justify-content: center;
  align-content: center;
  position: fixed;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
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

export const CopiedWrapper = styled.div`
  width: 300px;
  height: 150px;
  background-color: #fff;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin: auto;
  border-radius: 5px;
  position: relative;
`;

export const CopiedText = styled.p`
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0 auto;
`;
