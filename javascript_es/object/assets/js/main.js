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

/* 
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
 */

//---------------------------------------------------------------------------------------------------------------------------

/* const student = {
    name : 'Elia',
    lastName : 'Buratti',
    age : 27 ,
} //object litteral

student['name'] //Elia
student.name //Elia

for (const key in student) {
    const value = student[key];
    //console.log(value);
} */

//array di oggetti

const students = [
    {
        name : 'Elia',
        lastName : 'Buratti',
        age : 27 ,
    },
    {
        name : 'Mario',
        lastName : 'Rossi',
        age : 54 ,
    },
    {
        name : 'Andrea',
        lastName : 'Belletti',
        age : 19 ,
    },
    {
        name : 'Fabio',
        lastName : 'Cipolla',
        age : 34 ,
    },

];

const roeElement = document.querySelector('.student');
console.log(roeElement);

for (let i = 0; i < students.length; i++) {
    const student = students[i];

    console.log(student.name);
    console.log(student.lastName);
    console.log(student.age);

    const markup = 
    `<div class="col-3">
        <div class="card">
            <img src="https://picsum.photos/seed/picsum/700/400" alt="" class="card-img-top">
            <div class="card-body">
                <h4>${student.name} ${student.lastName}</h4>
                <p>${student.age}</p>
            </div>
        </div>
    </div>`

    roeElement.insertAdjacentHTML('beforeend', markup);

    
}

