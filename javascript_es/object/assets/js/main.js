// creiamo un oggetto per rappresentare una palla che ha le se seguenti proprietà; colore, diametro e tipo
//stampiamo in console il valore dell'oggetto
//usiamo il ciclo 

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
    
}