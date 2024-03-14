function generateGrid() {
  //Dichiaro il contenitore dove andro' a mettere le celle
  const containerElement = document.querySelector('.game-container');


  //Dichiaro l'elemento del selezionatore di difficolta'
  const difficultySelectorElement = document.getElementById('difficulty');

  //Dichiaro la variabile che determina la lunghezza del lato della griglia
  let squareSideLength = parseInt(difficultySelectorElement.value);

  //Resetto eventuali scelte precedenti
  console.log(`Ho cliccato il bottone con difficolta' ${squareSideLength}`)
  containerElement.classList.remove('difficulty-10', 'difficulty-9', 'difficulty-7')
  containerElement.innerHTML = '';

  //Genero tutto in base alla dificolta'
  for (let i = 0; i < Math.pow(squareSideLength, 2); i++) {
    const num = i + 1;
    containerElement.classList.add(`difficulty-${squareSideLength}`)

    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.innerHTML = num

    containerElement.append(cellElement);


    //Aggiungo la funzionalita' di cambio colore alle celle
    cellElement.addEventListener('click', function () {
      this.classList.toggle('bg-secondary')
      console.log(`Hai cliccato la casella ${num}`)
    });
  }
}


//dicahiaro il bottone di generazione della griglia
const playButton = document.querySelector('.start');

//aggiongo l'event listener al bottone

game.addEventListener('submit', function(event) {
  event.preventDefault();
  generateGrid();
});