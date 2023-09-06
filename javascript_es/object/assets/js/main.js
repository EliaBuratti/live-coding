// creiamo un oggetto per rappresentare una palla che ha le se seguenti proprietà; colore, diametro e tipo
//stampiamo in console il valore dell'oggetto
//usiamo il ciclo 
/* 
const palla = {
    colore : 'rosso',
    diametro : 15,
    tipo : 'calcio',
    tonda : true ,
}



console.log(palla.diametro);
console.log(palla['colore']); // le virgolette sono importanti, altrimenti va a cercare una variabile

for (const key in palla) {
    console.log(key);
    console.log(palla[key]);
    
} */


//---------------------------------------------------------------------------------------------------------------------------

// definiamo un array di oggetti:
// - ogni elemento dell'array è un oggetto che rappresenta una classe
// - ogni classe ha le proprietà nome e numeroStudenti


const school = [
    {
        nome : '1a',
        numeroStudenti : 25,
    },
    {
        nome : '2a',
        numeroStudenti : 35,
    },
    {
        nome : '3a',
        numeroStudenti : 45,
    },
];

const nuovaClasse = {
    nome : '4a',
    numeroStudenti : 55,
};

school.push(nuovaClasse);
console.log(school);

for (let i = 0; i < school.length; i++) {
    const classe = school[i];
    //console.log(classe);

    //con dot notation
    console.log(classe);
    console.log(classe.numeroStudenti);

    //con bracket notation
    console.log(classe['nome']);
    console.log(classe['numeroStudenti']);

    
}

for (const key in school) {

    console.log(key);
    console.log(school[key]);
}
