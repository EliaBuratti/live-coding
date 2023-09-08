/* Snack 3:

Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es: */

//Crea un nuovo array con la lista dei mammiferi.


const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

const mammiferi = animals.filter(animal => animal.classe === 'mammiferi' );
console.log(mammiferi);



/* Snack 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.; */

const person = [
    {
        nome: 'mario',
        cognome: 'rossi',
        età: 55,
    },
    {
        nome: 'luca',
        cognome: 'bianchi',
        età: 42,
    },
    {
        nome: 'quinto',
        cognome: 'benini',
        età: 49,
    },
    {
        nome: 'andrea',
        cognome: 'piero',
        età: 16,
    },
    {
        nome: 'martino',
        cognome: 'bernardi',
        età: 18,
    },
    {
        nome: 'gianluca',
        cognome: 'cola',
        età: 36,
    }
];

const newArrayPerson = person.map( element => {
    
    const puoGuidare = element.età >= 18 ? 'può guidare' : 'non può guidare';

    element.può_guidare = `${element.nome} ${element.cognome} ${puoGuidare}`;

    return element;
    
});

console.log(person);




/* 
Ed ecco il prossimo:

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {
        varietà: 'strana',
        peso: 10,
        lunghezza: 50,
    },
    {
        varietà: 'lunga',
        peso: 50,
        lunghezza: 66,
    },
    {
        varietà: 'corta',
        peso: 12,
        lunghezza: 78,
    },
    {
        varietà: 'tonda',
        peso: 30,
        lunghezza: 86,
    },
    {
        varietà: 'ovale',
        peso: 25,
        lunghezza: 49,
    },
    {
        varietà: 'quadrata',
        peso: 45,
        lunghezza: 93,
    },
    {
        varietà: 'triangolare',
        peso: 36,
        lunghezza: 87,
    },
    {
        varietà: 'esagonale',
        peso: 19,
        lunghezza: 68,
    },
    {
        varietà: 'rettangolare',
        peso: 22,
        lunghezza: 56,
    },
    {
        varietà: 'rotonda',
        peso: 21,
        lunghezza: 32,
    },
];
let pesoTotale = 0;

zucchine.forEach(zucchina => {

    pesoTotale += zucchina.peso;

});

console.log(pesoTotale);


//altra opzione

let total = zucchine.reduce((totale, zucchina) => {
    console.log(totale, 'risultato cumulativo');
    console.log(zucchina, 'oggetto della iterazione');
    return totale += zucchina.peso;
}, 0); //lo zero serve a dare un valore iniziale a totale

console.log(total, ' peso totale');

