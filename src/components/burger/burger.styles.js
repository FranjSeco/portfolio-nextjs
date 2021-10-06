import styled from "styled-components";

// BRUGER BUTTON

export const Burgerbtn = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  border-radius: 10px;
  transition: 0.2s ease;
  align-self: center;

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.25rem;
    background: ${({ isScrolling }) => (isScrolling ? "#000" : "#fff")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  &:hover {
    transform: scale(1.2);
  }
`;
