const fs = require("fs");
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", (errData) =>
 console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
 fs.writeFile(
  "./temp/output.json",
  JSON.stringify(pdfData),
  (data) => console.log(data)
 );
});




module.exports = convertPdf = (path) => pdfParser.loadPDF(`${path}`);