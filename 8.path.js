const path = require('node:path');

// barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// nombre del fichero
const base = path.basename('tmp/emi-secret-files/password.txt');
console.log(base);

// ponemos '.txt' para que lo quite, y solo aparezca el nombre del fichero
const filename = path.basename('tmp/emi-secret-files/password.txt', '.txt');
console.log(filename);

// obtener la extensión
const extension = path.extname('image.jpg');
console.log(extension);
