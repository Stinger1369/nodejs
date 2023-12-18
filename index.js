const cowsay = require('cowsay');
const myInformation = require('./information');

console.log(cowsay.say({
  text: `Je suis ${myInformation.nom} du campus ${myInformation.campus}`,
  e: "oO",
  T: "U "
}));
