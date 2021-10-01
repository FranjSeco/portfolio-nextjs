import styled from "styled-components";

export const Title = styled.div`
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
  width: 100%;
  height: auto;
  background-color: rgba(0,0,0, 0.6);
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: flex-start;
  position: relative;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 5px #000000;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    background-color: #000;
  }
`;

export const TechWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  text-justify: center;

  &:nth-child(1) {    
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;

    @media screen and (max-width: 500px) {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }

  &:nth-child(2) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;

    @media screen and (max-width: 500px) {
      border-left: none;
      border-right: none;
    }
  }

  &:nth-child(3) {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;

    @media screen and (max-width: 500px) {
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
`;

export const TechTitleWrapper = styled.div`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: center;
    justify-self: flex-start;
`;

export const TechStackTitle = styled.h3`
  font-size: 3rem;
  padding: 10px;
  width: auto;
  height: 10%;
  margin: 0 auto;
  @media screen and (max-width: 710px) {
    font-size: 2rem;
  }
`;


export const Techs = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-template-rows: auto(2, 1fr);
  grid-gap: 20px;
  padding: 100px;

  @media screen and (max-width: 1370px) {
    padding: 50px;
  }

  @media screen and (max-width: 850px) {
    padding: 20px;
  }
`;

export const TechItem = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: bolder;
  margin: 20px auto;
`;