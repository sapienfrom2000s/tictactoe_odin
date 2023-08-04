const Gameboard = (function(){	
  const data = new Array(10).fill(null);
  return {data}
})();

const Players = (function(){
  const player1 = { name: 'Joe', symbol: 'X', score: 0 }
  const player2 = { name: 'Jean', symbol: 'O', score: 0}
  return { player1, player2 }
})();

const Turn = (function(){
  let number = 1
  return { number }
})();

const Active_Player = (function(){
  return function(){
    return ( Turn.number % 2 == 0 ? Players.player2 :  Players.player1 )
  }
})();

(function enablegridinput(){
  var grid = document.querySelectorAll('.grid-container > *')
  grid.forEach(item => {
    item.addEventListener('click', main, { once:true })
})})();

function disablegridinput(){
  var grid = document.querySelectorAll('.grid-container > *')
  grid.forEach(item => {
    item.removeEventListener('click', main, { once:true })
})}

function main(event){
  input(event)
  isGameover()
  Turn.number++
}

function isGameover(){
  if(isWinning(Active_Player().symbol)){
    disablegridinput()
    console.log('won')
    //modal pop up
  }
  else if(isDraw()){
    console.log('Draw')
    //modal pop up
  }
}

function isDraw(){
  return Turn.number == 9 ? true : false
}

function input(event){
  const active_player = Active_Player()
  event.target.innerHTML = active_player.symbol
  Gameboard.data[event.target.dataset.gridIndex] = active_player.symbol
}

function isWinning(symbol){
  return (isHorizontal() || isVertical() || isDiagonal())
  // hardcoded as there are less cases to cover
  function isHorizontal(){
    let board = Gameboard.data
    return ((board[1] == board[2] && board[2] == board[3] && board[3] == symbol) ||
      (board[4] == board[5] && board[5] == board[6] && board[6] == symbol) ||
      (board[7] == board[8] && board[8] == board[9] && board[9] == symbol))
  }

  function isVertical(){
    let board = Gameboard.data
    return ((board[1] == board[4] && board[4] == board[7] && board[7] == symbol) ||
      (board[2] == board[5] && board[5] == board[8] && board[8] == symbol) ||
      (board[3] == board[6] && board[6] == board[9] && board[9] == symbol))
  }

  function isDiagonal(){
    let board = Gameboard.data
    return ((board[1] == board[5] && board[5] == board[9] && board[9] == symbol) ||
     (board[3] == board[5] && board[5] == board[7] && board[7] == symbol))
  }
}

(function handlePlayersForm(){
  let playersForm = document.getElementById("players-form");
  playersForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let player1Name = document.getElementById("player-1-name");
    let player2Name = document.getElementById("player-2-name");
  
    if (player1Name.value == "" || player2Name.value == "") {
      alert('Name field cannot be blank')
    } else {
      Players.player1.name = player1Name.value
      Players.player2.name = player2Name.value
      hideModal()
      displayPlayersInfo()
    }
  });
})();

function hideModal(){
  let modal = document.querySelector(".intro-modal")
  modal.style.display = 'none'
}

function displayPlayersInfo(){
  let player_1_name_holder = document.querySelector(".player-1-info > .name")
  let player_1_symbol_holder = document.querySelector(".player-1-info > .symbol")

  let player_2_name_holder = document.querySelector(".player-2-info > .name")
  let player_2_symbol_holder = document.querySelector(".player-2-info > .symbol")

  player_1_name_holder.innerHTML = Players.player1.name
  player_1_symbol_holder.innerHTML = Players.player1.symbol

  player_2_name_holder.innerHTML = Players.player2.name
  player_2_symbol_holder.innerHTML = Players.player2.symbol
}