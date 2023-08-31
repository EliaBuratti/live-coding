// const userNumber = 8;

/* if (userNumber % 2 === 0) {
    console.log('Il numero è pari');
} else {
    console.log('Il numero è dispari');
}; */

function isEven (userNumber) {

    if (userNumber % 2 === 0) {
        return true;

    } // si potrebbe usare l'else per fare return false, ma non serve perchè comunque non entra nell'if
    return false
};

/* const userNumber = prompt('scegli un numero')
const result = isEven(userNumber);
console.log(result);

if (result) {
    console.log('Il numero è pari');

} else {
    console.log('Il numero è dispari');

} */

const checkButton = document.querySelector('button');
const inputNumber = document.getElementById('user_number');

checkButton.addEventListener('click', function() {
    console.log('ho cliccato il pusante');
    console.log(`il numero inserito è: ${inputNumber.value}`);

    if (isEven(inputNumber.value)) {
        console.log('Il numero è pari');
    
    } else {
        console.log('Il numero è dispari');
    
    }
});