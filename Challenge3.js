const weightBernard = 78;
const heightBernard = 1.69;
const weightMarcel = 92;
const heightMarcel = 1.95;
const imcBernard = weightBernard / (heightBernard * heightBernard);
const imcMarcel = weightMarcel / (heightMarcel * heightMarcel);
const bernardHigherIMC = imcBernard > imcMarcel;

console.log(imcBernard);
console.log(imcMarcel);


console.log(bernardHigherIMC === true ? `Bernard ${imcBernard.toFixed(2)} a un IMC plus élevé que Marcel ${imcMarcel.toFixed(2)}` : `Marcel ${imcMarcel.toFixed(2)}a un IMC lus élevé que Bernard ${imcBernard.toFixed(2)}`)


//const imc = imcBernard
const weightString = prompt ('quel est votre poids');
const heightString = prompt ('quel est votre taille');


let height = parseFloat(heightString);
let weight = parseFloat(weightString);
console.log(typeof weight);
console.log(typeof height);
console.log(weight);
console.log(height);

const imc = weight / (height * height);
console.log(imc);


if (imc < 24) {
    console.log('Insuffisance pondérale');
} else if (imc <= 29) {
    console.log('Poids normal');
} else if (imc <= 34) {
    console.log('Surpoids');
} else if (imc <= 44) {
    console.log('Obésité');
} else {
    console.log('Obésité importante');
}

   