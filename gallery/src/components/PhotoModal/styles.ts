import styled from "styled-components";

interface OverlayProps {
  isOpen: boolean;
}

export const Overlay = styled.section<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;

  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};

  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    background: #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;

    width: auto;
    height: 100%;
    max-width: 80vw;
    max-height: 80vh;

    > img {
      width: auto;
      height: 100%;
      object-fit: cover;
    }
  }
`;
