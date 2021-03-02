const Tesseract = require('tesseract.js');
const fs = require('fs');

// Tesseract.recognize(
//   'https://tesseract.projectnaptha.com/img/eng_bw.png',
//   'eng',
//   { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//   console.log(text);
// })

Tesseract.recognize(
  fs.readFileSync('/Users/yuwdong/Downloads/book.jpeg'),
  'chi_sim',
  {
    logger: (m) => console.log(m),
    langPath: '/Users/yuwdong/code/js/tessdata/',
  }
).then(({ data: { text } }) => {
  console.log(text);
});
