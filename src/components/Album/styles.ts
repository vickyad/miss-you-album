import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const PageContent = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease-in-out;
  background: #af9886;

  &.page-content-enter {
    transform: translate(100%, -50%);
  }
`;

export const PaginationControls = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
`;

export const TransparentButton = styled.button`
  width: 25%;
  border: none;
  background-color: transparent;
  padding: 1rem;
  z-index: 10;

  &:disabled svg {
    opacity: 25%;
  }
`;
