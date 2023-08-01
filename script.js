const Gameboard = (function(){	
  const gameboard = [null, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  return {gameboard}
})();

const Players = (function(){
  const player1 = { name: 'Joe', symbol: 'X' }
  const player2 = { name: 'Jean', symbol: '0'}
  return { player1, player2 }
})();

(function enablegridinput(){
  var grid = document.querySelectorAll('.grid-container > *')
  grid.forEach(item => {
    item.addEventListener('click', event => {
      console.log(event.target.dataset.gridIndex)
      event.target.innerHTML = 'X'
    }, { once:true })
  })})();