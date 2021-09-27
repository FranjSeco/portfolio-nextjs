import styled from "styled-components";

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 1);
    z-index: -1;
    display: ${(props) => (props.isDisplayed)};
`;