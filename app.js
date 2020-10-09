let btnRow = document.getElementById("btn-row")
let playCount = 0


let items = {

  fireball: {
    name: 'Fireball',
    modifier: -2,
    description: 'Feel the burn!'
  },

  poisonPotion: {
    name: 'Poison Potion',
    modifier: -3,
    description: 'You got poisoned!'
  },

  healthPotion: {
    name: 'Health Potion',
    modifier: 5,
    description: 'SUSTENANCE!'
  }

}

let players = {
  player1: {
    HP: 100,
    name: "Demetrius",
    hitCount: 0,
    items: [items.fireball, items.healthPotion, items.poisonPotion]
  },

  player2: {
    HP: 100,
    name: "Voldemort",
    hitCount: 0,
    items: [items.fireball, items.healthPotion, items.poisonPotion]
  }
}

let activePlayer = players.player1

function slap() {
  activePlayer.HP--
  activePlayer.hitCount++
  draw()
}

function draw() {



  console.log(playCount)

  if (players.player1.HP > 100) {
    players.player1.HP = 100
  } else if (players.player2.HP > 100) {
    players.player2.HP = 100
  }

  if (players.player1.HP <= 0) {
    players.player1.HP = 0
    disabledGame()
  } else if (players.player2.HP <= 0) {
    players.player1.HP = 0
    disabledGame()
  }

  // PLAYER 1

  let hpCount = document.getElementById("hpCount")
  hpCount.innerText = players.player1.HP

  let hits = document.getElementById("hits")
  hits.innerText = players.player1.hitCount

  let healthBar = document.getElementById("healthBar")
  healthBar.style.width = players.player1.HP + "%"

  // PLAYER 2

  let hpCountPl2 = document.getElementById("hpCountPlayer2")
  hpCountPl2.innerText = players.player2.HP

  let hitsPl2 = document.getElementById("hitsPlayer2")
  hitsPl2.innerText = players.player2.hitCount

  let healthBarPl2 = document.getElementById("healthBarPlayer2")
  healthBarPl2.style.width = players.player2.HP + "%"

  name()
  playerTurn()
}

function name() {

  // PLAYER 1
  let playerName = document.getElementById("playerName")
  playerName.innerText = players.player1.name

  // PLAYER 2
  let player2Name = document.getElementById("player2Name")
  player2Name.innerText = players.player2.name
}

function kick() {
  activePlayer.HP -= 10
  activePlayer.hitCount++

  draw()
}

function punch() {
  activePlayer.HP -= 5
  activePlayer.hitCount++

  draw()
}

function reset() {
  players.player1.HP = 100
  players.player2.HP = 100

  players.player1.hitCount = 0
  players.player2.hitCount = 0


  btnRow.classList.remove("hidden")
  draw()
}

function disabledGame() {
  btnRow.classList.add("hidden")
}

function special(key) {
  activePlayer.HP += items[key].modifier

  if (items[key].name != 'Health Potion') {
    activePlayer.hitCount++
  }

  draw()
}

function playerTurn() {

  if (playCount % 2 == 0) {
    activePlayer = players.player1
  } else if (playCount % 2 != 0) {
    activePlayer = players.player2
  }

  playCount++
}

draw()
