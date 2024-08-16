import { ReactElement } from "react";
import { Container, InnerContainer } from "./styles";

interface ITextPage {
  cover?: boolean;
  text?: ReactElement;
}

const TextPage = ({ cover = false, text }: ITextPage) => {
  return (
    <Container $cover={cover}>
      <InnerContainer $cover={cover}>{text ?? ""}</InnerContainer>
    </Container>
  );
};
export default TextPage;
