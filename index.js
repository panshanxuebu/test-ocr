const Tesseract = require('tesseract.js');
const fs = require('fs');

// english
// Tesseract.recognize(
//   'https://tesseract.projectnaptha.com/img/eng_bw.png',
//   'eng',
//   { logger: (m) => console.log(m) }
// ).then(({ data: { text } }) => {
//   console.log(text);
// });

Tesseract.recognize(fs.readFileSync('./test-momaterial/book.jpeg'), 'chi_sim', {
  logger: (m) => console.log(m),
  langPath: './tessdata/',
}).then(({ data: { text } }) => {
  console.log(text.replace(/(\n|\t|\s)/g, ''));
});
