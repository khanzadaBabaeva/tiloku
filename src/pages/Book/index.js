import React, { useState } from "react";
import { Document, Page as ReactPdfPage, pdfjs } from "react-pdf";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { openPage } from "store/reducers/actions";
import { Button } from "@mui/material";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Book = () => {
  const pdfUrl = useSelector((state) => state.actions.openedBook);
  const dispatch = useDispatch();
  const { openedPage } = useSelector((state) => state.actions);
  const [numPages, setNumPages] = useState(null);
  const [isFlippingNext, setIsFlippingNext] = useState(false);
  const [isFlippingPrev, setIsFlippingPrev] = useState(false);

  const nextPage = () => {
    if (openedPage < numPages) {
      setIsFlippingNext(true);
      setTimeout(() => {
        dispatch(openPage({ openedPage: openedPage + 2 }));
        setIsFlippingNext(false);
      }, 0);
    }
  };
  const prevPage = () => {
    if (openedPage > 1) {
      setIsFlippingPrev(true);
      setTimeout(() => {
        dispatch(openPage({ openedPage: openedPage - 2 }));
        setIsFlippingPrev(false);
      }, 0);
    }
  };

  const handleLoadBook = (pdf) => {
    setNumPages(pdf.numPages);
  };

  return (
    pdfUrl && (
      <div className="pdf-viewer-container">
        <div>
          <Button
            onClick={prevPage}
            disabled={openedPage === 1}
            sx={{
              width: "auto",
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              },
            }}
          >
            <LeftOutlined />
          </Button>
        </div>
        <Document
          file={require("assets/books/" + pdfUrl)}
          className="pdf-document"
          onLoadSuccess={handleLoadBook}
        >
          <div className={`pdf-page ${isFlippingNext ? "prev-flip" : ""}`}>
            <ReactPdfPage pageNumber={openedPage} />
          </div>
          <div className={`pdf-page ${isFlippingPrev ? "next-flip" : ""}`}>
            <ReactPdfPage pageNumber={openedPage + 1} />
          </div>
        </Document>
        <div>
          <Button
            color="primary"
            onClick={nextPage}
            disabled={openedPage === numPages}
            sx={{
              width: "auto",
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              },
            }}
          >
            <RightOutlined />
          </Button>
        </div>
      </div>
    )
  );
};

export default Book;
