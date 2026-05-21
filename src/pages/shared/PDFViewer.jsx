import { Document, Page } from "react-pdf";
import { useState } from "react";

function PDFViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>

      <p>Total Pages: {numPages}</p>
    </div>
  );
}

export default PDFViewer;