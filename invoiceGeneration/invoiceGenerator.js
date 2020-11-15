const fs = require("fs");
const PDFDocument = require("pdfkit");

function assembleInvoice(invoiceData, nameOfFileToBeCreated) {
    console.log('assembleInvoice');
    let doc = new PDFDocument({ margin: 50 });

    buildHeader(doc);
    // buildCustomerInfo(doc, invoice);
    // buildInvoiceTable(doc, invoice);
    // buildFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream(nameOfFileToBeCreated));
}

// function buildCustomerInfo(doc, invoiceData) {
//     const customer = invoiceData.customer;
//     doc
//       .text(`Invoice Number: ${invoiceData.invoiceNumber}`, 50, 200)
//       .text(`Invoice Date: ${new Date()}`, 50, 215)
//       .text(customer.name, 300, 200)
//       .text(customer.address, 300, 215)
//       .text(customer.phone, 300, 130)
//       .moveDown();
// }
//
// function buildInvoiceTable(doc, invoiceData) {
//     let i, invoiceTableTop = 330;
//
//     for (i = 0; i < invoiceData.items.length; i++) {
//         const item = invoiceData.items[i];
//         const position = invoiceTableTop + (i + 1) * 30;
//         generateTableRow(
//         doc,
//         position,
//         item.item,
//         item.description,
//         item.amount / item.quantity,
//         item.quantity,
//         item.amount
//         );
//     }
// }
//
// function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
//     doc
//         .fontSize(10)
//         .text(c1, 50, y)
//         .text(c2, 150, y)
//         .text(c3, 280, y, { width: 90, align: "right" })
//         .text(c4, 370, y, { width: 90, align: "right" })
//         .text(c5, 0, y, { align: "right" });
// }
//
function buildHeader(doc) {
    console.log('buildHeader');
    doc
      .image("logo.png", 50, 45, { width: 50 })
      .fillColor("#444444")
      .fontSize(20)
      .text("ACME Inc.", 110, 57)
      .fontSize(10)
      .text("123 Main Street", 200, 65, { align: "right" })
      .text("New York, NY, 10025", 200, 80, { align: "right" })
      .moveDown();
}
//
// function buildFooter(doc) {
//     doc
//       .fontSize(10)
//       .text(
//         "To be made payable to Alex Gochenour. Thank you for your business!",
//         50,
//         780,
//         { align: "center", width: 500 }
//       );
// }

module.exports = assembleInvoice;
