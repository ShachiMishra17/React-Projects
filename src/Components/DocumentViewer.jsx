import React,{useState} from 'react'
import {Worker ,Viewer} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
//import DocViewer  from 'react-doc-viewer'; 

export const DocumentViewer = () => {
  const [pdfFile,setPdfFile] = useState(null);
  // const docFile =[
  //   {uri : '/feedback.docx'},
  // ];

 // Function to handle link click and set the PDF file
  const handleLinkClick = (e) => {
  e.preventDefault(); // Prevent default behavior of the anchor tag
  setPdfFile('/Seminar content.pdf'); // Path to your PDF file in the public folder
};

  // Function to handle PDF download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Seminar content.pdf'; // Path to your PDF file in the public folder
    link.download = 'Seminar_content.pdf'; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='document-viewer'>
      <h2>PDF Viewer</h2>
      <div className="header">
      <a href="/Seminar content.pdf" onClick={handleLinkClick} className='view-link'>View Seminar Content PDF</a>
      {pdfFile && (
          <button onClick={handleDownload} className='download-button'>
            Download PDF
          </button>
      )}
      </div>
      {pdfFile && (
        <div className="pdf-container">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={pdfFile} />
          </Worker>

        </div>
      )}
      {/* <h2>Word Document Viewer </h2>
      <DocViewer
        document={docFile}
      /> */}
    </div>
  );
};
export default DocumentViewer;