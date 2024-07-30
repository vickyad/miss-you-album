import { Container, Image } from "./styles";

interface IPolaroid {
  imageUrl: string;
  rotated?: boolean;
  style?: React.CSSProperties;
}

const Polaroid = ({ imageUrl, rotated = false, style }: IPolaroid) => {
  return (
    <Container rotated={rotated} style={style}>
      <Image src={imageUrl} rotated={rotated} />
    </Container>
  );
};
export default Polaroid;
