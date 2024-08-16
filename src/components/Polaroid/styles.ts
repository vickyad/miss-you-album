import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
`;

export const InnerContainer = styled.div<{ $rotated: boolean }>`
  position: relative;
  background-color: #fafafa;
  padding: ${(props) =>
    props.$rotated ? "1rem 3rem 1rem 1.5rem" : "1.5rem 1rem 3rem"};
`;

export const Tape = styled.span<{ $color: string }>`
  position: absolute;
  width: 6rem;
  height: 1.5rem;
  background: ${(props) => props.$color};
`;

export const Image = styled.img<{ $rotated: boolean; $position: string }>`
  object-fit: cover;
  width: ${(props) => (props.$rotated ? "17rem" : "13rem")};
  height: ${(props) => (props.$rotated ? "13rem" : "17rem")};
  object-position: ${(props) => props.$position};
`;
