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
    background-color: rgba(0,0,0,0.8);
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
