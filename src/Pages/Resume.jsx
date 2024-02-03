import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import pdf from "./Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="resume-section">
      <div className="document-container">
        <Document
          className="document"
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={window.innerWidth * 0.8}
          />
        </Document>
      </div>
      <div className="page-navigation">
        <button
          className="btn btn-outline-primary"
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          className="btn btn-outline-primary"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </div>
      <button
        className="btn btn-outline-primary"
        onClick={() => window.open(pdf, "_blank")}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
