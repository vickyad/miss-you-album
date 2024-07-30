import { Container, Image, InnerContainer, Tape } from "./styles";

interface IPolaroid {
  imageUrl: string;
  rotated?: boolean;
  style?: React.CSSProperties;
}

const Polaroid = ({ imageUrl, rotated = false, style }: IPolaroid) => {
  const getColor = () => {
    const color = Math.floor(Math.random() * (4 - 0));
    switch (color) {
      case 0:
        return " repeating-linear-gradient(to right, #ffdfc8 0, #ffdfc8 10px, #fec5bb 10px, #fec5bb 20px)";
      case 1:
        return "repeating-linear-gradient(45deg, #c0d8c0,#c0d8c0 10px,#fafafa 10px,#fafafa 20px)";
      case 2:
        return "linear-gradient(90deg, #eccaff 0%, #fae7eb 100%)";
      case 3:
      default:
        return "#d1edea";
    }
  };

  const getTape = () => {
    const tape = Math.floor(Math.random() * (8 - 0));
    switch (tape) {
      case 0:
        return (
          <Tape
            style={{ top: 0, left: "-2.5rem", transform: "rotate(-46deg)" }}
            $color={getColor()}
          />
        );
      case 1:
        return (
          <Tape
            style={{ top: "1rem", right: "-1rem", transform: "rotate(52deg)" }}
            $color={getColor()}
          />
        );
      case 2:
        return (
          <Tape
            style={{ bottom: 0, left: "-1.6rem", transform: "rotate(43deg)" }}
            $color={getColor()}
          />
        );
      case 3:
        return (
          <Tape
            style={{
              bottom: "0.5rem",
              right: "-2rem",
              transform: "rotate(-61deg)",
            }}
            $color={getColor()}
          />
        );
      case 4:
        return (
          <Tape
            style={{
              top: "-0.6rem",
              left: "50%",
              transform: "translateX(-50%) rotate(7deg)",
            }}
            $color={getColor()}
          />
        );
      case 5:
        return (
          <>
            <Tape
              style={{
                top: "0.5rem",
                left: "-1.75rem",
                transform: "rotate(-39deg)",
              }}
              $color={getColor()}
            />
            <Tape
              style={{
                bottom: "0.6rem",
                right: "-1.6rem",
                transform: "rotate(-49deg)",
              }}
              $color={getColor()}
            />
          </>
        );
      case 6:
        return (
          <>
            <Tape
              style={{
                top: "1rem",
                right: "-2.1rem",
                transform: "rotate(47deg)",
              }}
              $color={getColor()}
            />
            <Tape
              style={{
                bottom: "1rem",
                left: "-1.4rem",
                transform: "rotate(46deg)",
              }}
              $color={getColor()}
            />
          </>
        );
      case 7:
      default:
        return <></>;
    }
  };

  return (
    <Container style={style}>
      <InnerContainer $rotated={rotated}>
        {getTape()}
        <Image src={imageUrl} $rotated={rotated} />
      </InnerContainer>
    </Container>
  );
};
export default Polaroid;
