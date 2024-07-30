import { useState } from "react";
import {
  Container,
  PageContent,
  PaginationControls,
  TransparentButton,
} from "./styles";
import { albumPages } from "../../content/album";
import Icon from "../Icon";

const Album = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextPage = () => {
    if (currentPage < albumPages.length - 1 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setCurrentPage(currentPage + 1);
      }, 500);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setCurrentPage(currentPage - 1);
      }, 500);
    }
  };

  return (
    <Container>
      <PageContent className={animating ? "page-content-enter" : ""}>
        {albumPages[currentPage].content}
      </PageContent>
      <PaginationControls>
        <TransparentButton
          onClick={prevPage}
          disabled={currentPage === 0 || animating}
          style={{ textAlign: "left" }}
        >
          <Icon type="arrow-left" />
        </TransparentButton>
        <TransparentButton
          onClick={nextPage}
          disabled={currentPage === albumPages.length - 1 || animating}
          style={{ textAlign: "right" }}
        >
          <Icon type="arrow-right" />
        </TransparentButton>
      </PaginationControls>
    </Container>
  );
};

export default Album;
