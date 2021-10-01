import styled from "styled-components";

export const Title = styled.h2`
  color: #000;
  font-weight: 900;
  font-size: 60px;
  line-height: 80px;
  margin: 0 0 30px 0;
  display: inline-block;
  align-self: flex-start;
  z-index: 1;
  
  @media screen and (max-width: 500px) {
    font-size: 40px;
    margin: 0 0 20px 0;
  }
`;

export const Container = styled.div`
  width: auto;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;
  height: 100%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const AboutText = styled.p`
  color: #000;
  font-weight: 900;
  font-size: 2.5em;
  line-height: 60px;
  width: auto;
  margin: 0 0 20px 0;

  @media screen and (max-width: 700px) {
    width: 100%;
    font-size: 2em;
    line-height: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
    line-height: 30px;
  }
`;


