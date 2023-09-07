/* Snack 1

Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */

//Crea un array composto da 10 automobili. 
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const automobile = [
    {
        marca:'fiat',
        modello:'panda',
        alimentazione:'benzina',
    },
    {
        marca:'opel',
        modello:'corsa',
        alimentazione:'diesel',
    },
    {
        marca:'citroen',
        modello:'cactus',
        alimentazione:'benzina',
    },
    {
        marca:'realut',
        modello:'clio',
        alimentazione:'diesel',
    },
    {
        marca:'voslkwagen',
        modello:'golf',
        alimentazione:'metano',
    },
    {
        marca:'tesla',
        modello:'model3',
        alimentazione:'elettrica',
    },
    {
        marca:'volvo',
        modello:'xc-30',
        alimentazione:'diesel',
    },
    {
        marca:'mazda',
        modello:'mx-30',
        alimentazione:'benzina',
    },
    {
        marca:'nissan',
        modello:'juke',
        alimentazione:'gpl',
    },
    {
        marca:'toyota',
        modello:'yaris',
        alimentazione:'benzina',
    },
];

//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
const autoBenzina = automobile.filter(carburante => carburante.alimentazione === 'benzina');
console.log(autoBenzina); //vedo solo auto a benzina

const autoDiesel = automobile.filter(carburante => carburante.alimentazione === 'diesel');
console.log(autoDiesel); //vedo solo auto a diesel

const altreAuto = automobile.filter(carburante => carburante.alimentazione !== 'benzina' && carburante.alimentazione !== 'diesel');
console.log(altreAuto); //vedo solo auto con alimentazioni alternative al diesel e benzina

/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const nomiUtenti = ['maRinO', 'FiLIPPo', 'Pluto', 'MARChinO'];

//versione estesa
const nomiFormattati = nomiUtenti.map(nome => {

    let primoCarattere = nome.charAt(0).toUpperCase();

    let restoCaratteri = (nome.slice(1)).toLowerCase();

    return primoCarattere + restoCaratteri
});

console.log(nomiFormattati);//['Marino', 'Filippo', 'Pluto', 'Marchino']


//in una sola linea
const nomiForm = nomiUtenti.map(nome => nome.charAt(0).toUpperCase() + (nome.slice(1).toLowerCase()));
console.log(nomiForm);//['Marino', 'Filippo', 'Pluto', 'Marchino']



