/* FUNZIONI */

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

  //Dichiaro l'array delle bombe e il numero delle bombe
  const bombNumber = 16;
  const bombs = [];

  //Genero numeri casuali da 1 a lunghezza del lato alla seconda e se non sono gia' presenti nell'array delle bombe ce li inserisco finche l'array delle bombe non e' lungo bombNUmber 
  while (bombs.length < bombNumber) {
    let bombCellNumber = Math.floor(Math.random() * Math.pow(squareSideLength, 2)) + 1;
    if (bombs.includes(bombCellNumber) == false) {
      bombs.push(bombCellNumber)
    }
  }
  console.log(bombs)

  //Dichiaro punteggio e punteggio massimo
  let score = 0;
  let maxScore = Math.pow(squareSideLength, 2) - bombNumber;

  //Genero un array di caselle cliccate
  const clickedCells = [];

  //Genero tutto in base alla dificolta'
  for (let i = 0; i < Math.pow(squareSideLength, 2); i++) {

    //Dichiaro contatore di caselle
    const num = i + 1;

    //Definisco la difficolta' aggiungendo la classe al container del gioco
    containerElement.classList.add(`difficulty-${squareSideLength}`)

    //Aggiungo un div, gli do la classe cell, ci metto dentro il numero della sua casella e lo appendo al container
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.innerHTML = num
    containerElement.append(cellElement);

    //Aggiungo la funzionalita' di cambio colore alle celle
    cellElement.addEventListener('click', function () {
      if (bombs.includes(num) == true && isGameOver == false) {
        this.classList.toggle('bg-danger')
        gameOver();
      } else if (clickedCells.includes(num) == false && isGameOver == false) {
        this.classList.toggle('bg-primary');
        clickedCells.push(num)
        score++
        console.log(`Hai cliccato la casella ${num}. Il tuo punteggio attuale è di ${score}`);
      } else if (clickedCells.includes(num) == true && isGameOver == false) {
        alert(`Hai già cliccato questa casella`)
      }
    });
  }
}

function gameOver() {
  isGameOver = true;
  
}

/* CODICE */

//Dichiaro la condizione di gioco in corso
let isGameOver = false;

//dicahiaro il bottone di generazione della griglia
const playButton = document.querySelector('.start');

//aggiongo l'event listener al bottone
game.addEventListener('submit', function(event) {
  event.preventDefault();
  generateGrid();
});