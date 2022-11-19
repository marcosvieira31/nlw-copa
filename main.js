function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <section class="card-container">
    <h2>${date}<span>${day}</span></h2>
    <div class="card" name="open">
          <ul>${games}</ul>
    </div>
    </section>
  `
}

var closeCard = function (x) {
  if (x.target.tagName === "H2") {
    if (x.target.nextElementSibling.getAttribute("name") === "open") {
      x.target.nextElementSibling.setAttribute("name", "closed")
      x.target.nextElementSibling.setAttribute(
        "style",
        "animation: close-card 0.3s forwards;"
      )
      for (
        var i = 0;
        i < x.target.nextElementSibling.children[0].children.length;
        i++
      ) {
        x.target.nextElementSibling.children[0].children[i].setAttribute(
          "style",
          "display:none"
        )
      }

      x.target.setAttribute(
        "style",
        "border-bottom: 2px solid var(--card-color-primary); border-radius: 6px;"
      )
    }
  }
}

var openCard = function (y) {
  if (y.target.tagName === "H2") {
    console.log(y.target.tagName)
  }
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("catar", "13:00", "equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "irã") +
      createGame("senegal", "13:00", "holanda") +
      createGame("usa", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudita") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália")
  ) +
  createCard(
    "22/11",
    "segunda",
    createGame("argentina", "07:00", "saudita") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudita") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudita") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália")
  )

document.addEventListener("click", closeCard)
