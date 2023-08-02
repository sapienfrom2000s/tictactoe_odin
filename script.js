const Gameboard = (function(){	
  const data = new Array(10).fill(null);
  return {data}
})();

const Players = (function(){
  const player1 = { name: 'Joe', symbol: 'X' }
  const player2 = { name: 'Jean', symbol: 'O'}
  return { player1, player2 }
})();

const Active_Player = (function(){
  let turn_number = 0
  return function(){
    turn_number++
    return ( turn_number % 2 == 0 ? Players.player2 :  Players.player1 )
  }
})();

(function enablegridinput(){
  var grid = document.querySelectorAll('.grid-container > *')
  grid.forEach(item => {
    item.addEventListener('click', event => {
      const active_player = Active_Player()
      event.target.innerHTML = active_player.symbol
      Gameboard.data[event.target.dataset.gridIndex] = active_player.symbol
      console.log(Gameboard.data)
    }, { once:true })
  })})();

