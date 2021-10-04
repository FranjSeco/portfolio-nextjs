import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  right: 10px;
  bottom: 30px;
  margin: 0 auto;
  padding-right: 45px;
  width: 50px;
  height: 160px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 100;
  

  @media screen and (max-width: 1280px) {
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    flex-direction: row;
    justify-content: center;
    align-content: center;
    height: 50px;
    padding: 0;
    align-self: center;
    margin: 0 auto;
    right: 0;
    bottom: 0;
  }
`;

export const SocialIconsWrapper = styled.div`
  background-color: none;
  position: relative;
  height: 50px;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin: auto 0;

  @media screen and (max-width: 1280px) {
    width: 100vw;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
`;

export const IconsLink = styled.a`
  text-decoration: none;
  color: #000;
  margin: 10px 0 0 20px;
  transition: 0.2s ease;
  align-self: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  @media screen and (max-width: 1280px) {
    color: #fff;
    margin: 0 auto;
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
