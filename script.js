const priceKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;

let kmPassenger = parseInt(prompt("Quanti km devi percorrere?"));
let agePassenger = parseInt(prompt("Qual'è la tua età?"));

const priceTicket = priceKm * kmPassenger;
const priceUnderage = priceTicket * (1 - discountUnderage / 100);
const priceOver65 = priceTicket * (1 - discountOver65 / 100);
let finalPrice

if (agePassenger < 18){
    finalPrice = priceUnderage
    console.log('Il prezzo finale è pari a', finalPrice .toFixed(2));
}
else if (agePassenger > 65){
    finalPrice = priceOver65
    console.log('Il prezzo finale è pari a', finalPrice .toFixed(2));
}
else {
    console.log('Il prezzo totale del ticket è', priceTicket .toFixed(2));

}