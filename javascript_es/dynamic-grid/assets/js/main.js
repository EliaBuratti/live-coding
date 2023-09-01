console.log('ciao dynamic');


const fielElement = document.querySelector('.field');
const limit = 64;


function generateField (domElement, limit) {
    
    //generate the field
    for (let i = 0; i < limit; i++) {
    //opzione1

/*  const cellMarkup = `<div class="cell">${i + 1}</div>`;
    domElement.insertAdjacentHTML('beforeend', cellMarkup); 
*/



    //opzione 2

    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    cellElement.append(i + 1);
    domElement.append(cellElement);

    cellElement.addEventListener('click', function(){

        console.log('ho cliccato sul numero', cellElement);

        //opzione 1 per creare classi -------------------------

        //cellElement.classList.toggle('bg-green'); 
        //toggle mette o toglie la classe

        


        //opzione 2 per creare classe -------------------------

        this.classList.toggle('bg-green');
        // this fa riferimento all'oggetto in cui si trova in questo caso cellElement
    })
};

};

generateField(fielElement, limit);


// INFO una volta creato l'event listener con il ciclo for, resta attivo, non sparisce