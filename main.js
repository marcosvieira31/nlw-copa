function createGame(game, player1, hour, player2) {
  return `
    <li id="jogo${game}">
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
  `
}

function createCard(card, date, day, games) {
  return `
    <div class="card" id="card${card}">
          <h2>${date}<span>${day}</span></h2>
          <ul>${games}</ul>
    </div>
  `
}

function dropCard() {
  let card = document.getElementsByClassName("card")

  return card
}

console.log(dropCard())

document.querySelector("#cards").innerHTML =
  createCard(
    "1",
    "20/11",
    "domingo",
    createGame("1", "catar", "13:00", "equador")
  ) +
  createCard(
    "2",
    "21/11",
    "segunda",
    createGame("2", "inglaterra", "10:00", "irã") +
      createGame("3", "senegal", "13:00", "holanda") +
      createGame("4", "usa", "16:00", "gales")
  )
