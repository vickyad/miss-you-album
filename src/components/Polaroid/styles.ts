import styled from "styled-components";

export const Container = styled.div<{ rotated: boolean }>`
  position: absolute;
  width: fit-content;
  height: fit-content;
  background-color: #fafafa;
  padding: ${(props) =>
    props.rotated ? "1rem 3rem 1rem 1.5rem" : "1.5rem 1rem 3rem"};
`;

export const Image = styled.img<{ rotated: boolean }>`
  object-fit: cover;
  width: ${(props) => (props.rotated ? "17rem" : "13rem")};
  height: ${(props) => (props.rotated ? "13rem" : "17rem")};
`;
