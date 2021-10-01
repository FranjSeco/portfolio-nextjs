/* eslint-disable no-shadow */
import styled, { css }  from "styled-components";

export const GlobalWrapper = styled.main`
  width: 100%;
  margin: auto;
  position: relative;
`;

export const GlobalSection = styled.section`
  max-width: 1320px;
  margin: auto;
`;

export const Wrapper = styled.section`
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 50px 90px 70px 90px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${({ dark }) =>
    dark &&
    css`
      background-color: #1A1B22;
      color: #fff;
  `}
  ${({ neutral }) =>
    neutral &&
    css`
      background-color: #e5e5e5;
      color: #000;
  `}
  ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
      color: #fff;
  `}
  ${({ white }) =>
    white &&
    css`
      background-color: #fff;
      color: #fff;
  `}

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 100px 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 80px 16px;
  }

  @media screen and (max-width: 335px) {
    padding: 60px 10px;
  }
`;

// export const GlobalButton = styled.a`
//   all: unset;
//   position: relative;
//   display: grid;
//   place-items: center;
//   cursor: pointer;
//   transition: all 0.3s;
//   text-transform: uppercase;
//   text-align: center;
//   border-radius: 10px;
//   background: ${(props) => props.theme.colors.white};
//   color: ${(props) => props.theme.colors.purple};
//   font-family: ${(props) => props.theme.fonts.condensed};
//   font-style: normal;
//   font-weight: bold;
//   font-size: 24px;
//   line-height: 28px;
//   width: 235px;
//   height: 60px;
//   &:hover {
//     background: ${(props) => props.theme.colors.purple};
//     color: ${(props) => props.theme.colors.white};
//   }
// `;
