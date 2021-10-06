import styled from "styled-components";
import Image from "next/image";
import { Hireme } from "../global-components/hireme/hireme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 120px 100px 100px 100px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1280px) {
    padding: 150px 50px 150px 50px;
  }

  @media screen and (max-width: 640px) {
    padding: 0;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 320px) {
    padding: 0;
  }
`;

export const IntroOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0);
`;

export const Img = styled(Image)`
  position: absolute;
  object-position: center;
  z-index: -2;
`;

export const IntroWrapper = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  align-self: center;
  box-shadow: 5px 5px 15px 5px #000000;
  overflow: hidden;
  border-radius: 5px;
  padding: 50px;
  margin: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: center;

  @media screen and (max-width: 1280px) {
    width: 95vw;
  }

  @media screen and (max-width: 830px) {
    margin: 50px auto 50px auto;
  }

  @media screen and (max-width: 640px) {
  
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 0 auto;
    width: 95vw;
    padding: 10px;
  }

  @media screen and (max-width: 320px) {
  }
`;
export const Paragraph = styled.p`
  color: #fff;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 29px;
  margin: 0 auto 30px auto;
  width: 100%;
  z-index: 100;

  @media screen and (max-width: 640px) {
    font-size: 2rem;
    line-height: 2.1rem;
    margin: 20px auto;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 100px;
  line-height: 80px;
  margin: 20px auto 0 auto;
  width: 100%;

  @media screen and (max-width: 1280px) {
    font-weight: 900;
    font-size: 4rem;
    line-height: 50px;
    margin: 0 auto 0 0;
  }

  @media screen and (max-width: 380px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const Subtitle = styled.h3`
  color: #fff;
  opacity: 0.8;
  font-weight: 900;
  font-size: 6rem;
  line-height: 80px;
  margin: 0 auto 30px auto;
  width: 100%;

  @media screen and (max-width: 1280px) {
    font-weight: 900;
    font-size: 4rem;
    line-height: 50px;
    margin: 0 auto 20px 0;
  }

  @media screen and (max-width: 640px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

export const Text = styled.p`
  color: #fff;
  opacity: 0.8;
  font-weight: 400;
  font-size: 3rem;
  line-height: auto;
  width: auto;
  margin: 50px 0 0 0;

  @media screen and (max-width: 1280px) {
    font-weight: 900;
    font-size: 2rem;
    line-height: 30px;
    margin: 0;
  }
  @media screen and (max-width: 920px) {
    width: 352px;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  @media screen and (max-width: 640px) {
    width: 328px;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 380px) {
    width: 284px;
  }
`;

export const HiremeIntro = styled(Hireme)`
  margin-top: 50px;
  padding: 5px;
`;
