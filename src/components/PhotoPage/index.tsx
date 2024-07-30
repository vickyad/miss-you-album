import { useEffect, useState } from "react";
import Polaroid from "../Polaroid";
import { Container } from "./styles";
import { layouts } from "./layoutBases";

interface IPage {
  layout: "one" | "two" | "three" | "four" | "five";
  images: string[];
}

const PhotoPage = ({ layout, images }: IPage) => {
  const [currentLayout, setCurrentLayout] = useState<any>(undefined);
  useEffect(() => {
    let selectedLayout = layouts.find((l) => l.layout === layout);
    if (selectedLayout) {
      setCurrentLayout(selectedLayout);
    }
  }, [layout]);

  return (
    <Container>
      {currentLayout &&
        currentLayout.photos &&
        currentLayout.photos.map((image: any, index: number) => {
          return (
            <Polaroid
              key={`polaroid_photo_${index}`}
              imageUrl={images[index]}
              rotated={image.rotated}
              style={image.style}
            />
          );
        })}
    </Container>
  );
};
export default PhotoPage;
