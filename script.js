const Gameboard = (function(){	
  const gameboard = [null, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  return {gameboard}
})();

const Players = (function(){
  const player1 = { name: 'Joe', symbol: 'X' }
  const player2 = { name: 'Jean', symbol: '0'}
  return { player1, player2 }
})();

(function addgridtodocument(){
  board = document.querySelector(".board") 
  for(var i = 1; i <= 9; i++){
    var new_div = document.createElement('div')
    new_div.classList.add(`grid_${i}`)
    new_div.innerHTML = 0
    board.appendChild(new_div) 
  }
})();

console.log('hello');
