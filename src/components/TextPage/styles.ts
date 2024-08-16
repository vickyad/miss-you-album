import styled from "styled-components";

export const Container = styled.div<{ $cover: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.$cover ? "#b96a59" : "#af9886")};
`;

export const InnerContainer = styled.div<{ $cover: boolean }>`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.$cover ? 600 : 400)};
  color: ${(props) => (props.$cover ? "#fafafa" : "#000000")};
  padding: 3rem 2.5rem;

  & h1 {
    font-size: 3.5rem;
  }

  & p {
    font-size: 1.3rem;
  }
`;
