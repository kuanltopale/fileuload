const PDFDocument= require('PDFkit');
const fs = require('fs');
// import 'PDFkit';
// Create a document
// let pdfDocument= new PDFkit ();
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));

doc.image('touch.jpg', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });

  // doc.text('hello pf');


  doc
  .fontSize(25)
  .text('hello pdf', 100, 100);

  doc
  .addPage()
  .fontSize(25)
  .text('Here is some vector graphics...', 100, 100);

  doc
  .save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF3300');

doc.end();