
//console.log(process.argv);

var ms = process.argv[2];

ms = ms.split("-ms=")[1];

console.log(`Hola ${ms}`);