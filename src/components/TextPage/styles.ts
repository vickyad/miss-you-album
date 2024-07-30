import styled from "styled-components";

export const Container = styled.div<{ cover: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.cover ? "#b96a59" : "#af9886")};
`;
