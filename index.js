const userLife = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Je suis ${userLife.name} de ${userLife.campus}`,
    e: "oO",
    T: "U "
}));


