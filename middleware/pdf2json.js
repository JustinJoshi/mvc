const fs = require("fs");
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", (errData) =>
 console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
 fs.writeFile(
  "./temp/output.txt",
    pdfParser.getRawTextContent(),
    () => {
    console.log("PDF successfully converted to txt");
  }
 );
 fs.writeFile(
  "./temp/output.json",
  JSON.stringify(pdfData),
  (data) => console.log("PDF successfully converted to json")
 );
});




module.exports = convertPdf = (path) => pdfParser.loadPDF(`${path}`);