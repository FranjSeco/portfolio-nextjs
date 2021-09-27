import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 25px;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const Credits = styled.div`
  height: 50px;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 600px) {
    margin: 20px;
  }
`;

export const Text = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: rgba(255, 255, 255, 1);
  align-self: center;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const SocialIcons = styled.div`
  background-color: none;
  position: relative;
  height: 50px;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin: auto 0;

  @media screen and (max-width: 600px) {
    align-self: center;
  }
`;

export const IconsLink = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 0 20px;
  transition: 0.2s ease;
  align-self: center;
  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    transform: scale(1.5);
  }
`;
