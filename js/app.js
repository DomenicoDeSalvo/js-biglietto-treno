//TEST
//console.log('Biglietto');

// Acquisizione dati 

const age = parseInt(prompt('Inserire la propria età')); //Number
const distance = parseFloat(prompt('Inserire la quantità di Km da percorrere')); //Number
//Calcolo prezzo biglietto

const fullPrice = (distance * 0.21); //Number
const adultPrice = fullPrice.toFixed(2); //String

//console.log(fullPrice);

//Applicazione sconto

const discount1Price = (fullPrice * 0.8); //Number
const youngPrice = discount1Price.toFixed(2); //string

const discount2Price = (fullPrice * 0.6); //Number
const seniorPrice = discount2Price.toFixed(2); //String

// Output

if(age < 18) {
    console.log(youngPrice + '€');
} else if(age > 65) {
    console.log(seniorPrice + '€');
} else {
    console.log(adultPrice + '€');
}
