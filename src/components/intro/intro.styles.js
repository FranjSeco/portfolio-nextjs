import styled from "styled-components";
import Image from "next/image";
import { Hireme } from "../global-components/hireme/hireme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 150px 100px 100px 100px;
  /* margin-bottom: 50px; */
  position: relative;
  z-index: 1;

  @media screen and (max-width: 640px) {
    /* padding: 100px 50px 100px 50px; */
    padding: 0;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 320px) {
    padding: 0;
  }
`;

export const Img = styled(Image)`
  position: absolute;
  object-position: center;
  z-index: -1;
`;

export const IntroWrapper = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.7);
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
  justify-content: center;
  align-content: center;
  align-self: center;

  @media screen and (max-width: 830px) {
    margin: 0 auto 50px auto;
  }

  @media screen and (max-width: 640px) {
    margin: 0 auto;
    width: 95vw;
    padding: 10px;
  }

  @media screen and (max-width: 320px) {
  }
`;

// export const SectionAnimation = styled.div`
//     position: absolute;
//     right: 10px;
//     top: 100px;
//     width: 800px;
//     height: 900px;
//     z-index: 10000;
// `;

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
  font-size: 7rem;
  line-height: 80px;
  margin: 0 auto 0 auto;
  width: 100%;

  @media screen and (max-width: 1280px) {
    font-weight: 900;
    font-size: 4rem;
    line-height: 50px;
    margin: 0 auto 20px 0;
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
  font-weight: 900;
  font-size: 3rem;
  line-height: auto;
  width: 700px;
  margin: 50px 0 20px 0;

  @media screen and (max-width: 1280px) {
    font-weight: 900;
    font-size: 2rem;
    line-height: 30px;
    margin: 0 auto 20px 0;
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
    margin: 0 auto;
  }
`;

export const HiremeIntro = styled(Hireme)`
  margin-top: auto;
  padding: 5px;
`;
