import { Container } from "./styles";

interface ITextPage {
  cover?: boolean;
  text?: string;
}

const TextPage = ({ cover = false, text }: ITextPage) => {
  return <Container cover={cover}>Eu sou um texto</Container>;
};
export default TextPage;
