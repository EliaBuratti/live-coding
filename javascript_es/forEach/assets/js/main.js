
const memberTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',	
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',	
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',	
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',	
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',	
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',	
        foto: 'barbara-ramos-graphic-designer.jpg'
    },

];

memberTeam.forEach((element, index, array) => { //element, index, array non sono obbligatori questi nomi, ma servono per capire l'ordine dei parametri, element serve sempre!!!!
/*     console.log(element);
    console.log(index);
    console.log(array); */
    
});

memberTeam.forEach((element) => {
    console.log(`${element.nome}'s role is ${element.ruolo}`
    );
//NB return non si usa nei cicli, solo nelle funzioni!!!!!
}); 



//map è simile al for each ma viene racchiuso in una costante
const num = [2, 3, 6, 7, 8];
const provaMap = num.map((numero, index, array) => {
    return numero + 1;
});

console.log(provaMap);



//filter mi restituisce il risultato di una condizione a patto che sia true, se è falso non restituisce nulla. si utilizza il return

const numbers = [2, 3, 6, 7, 8];
const pari = numbers.filter((numb) => {
    if (numb % 2 === 0) {
        return true
    }
    return false
});

console.log(pari);

//versione compatta della funzione sopra filter
numbers.filter(numb => numb % 2 === 0); // restituisce comunque true o false
