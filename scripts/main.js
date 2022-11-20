function createGame(player1, hour, player2) {
  return `
    <li style="display:none">
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
    <div class="card" name="closed">
          <ul>${games}</ul>
    </div>
    </section>
  `
}

var cardDinamic = function (x) {
  let cardTitulo = x.target
  let divCard = cardTitulo.nextElementSibling
  let jogos = cardTitulo.nextElementSibling.children[0].children

  if (cardTitulo.tagName === "H2") {
    if (divCard.getAttribute("name") === "closed") {
      divCard.setAttribute("name", "open")
      divCard.setAttribute(
        "style",
        "animation: close-card 0.3s reverse forwards;"
      )
      for (var i = 0; i < jogos.length; i++) {
        jogos[i].setAttribute("style", "display:flex")
      }

      cardTitulo.setAttribute(
        "style",
        "border-bottom: 0; border-radius: 6px 6px 0 0;"
      )
    } else {
      cardTitulo.setAttribute(
        "style",
        "border-bottom: 2px solid var(--card-color-primary); border-radius: 6px;"
      )
      divCard.setAttribute("style", "animation: close-card 0.3s forwards;")
      for (var i = 0; i < jogos.length; i++) {
        jogos[i].setAttribute("style", "display:none")
      }

      divCard.setAttribute("name", "closed")
    }
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
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia") +
      createGame("alemanha", "10:00", "japão") +
      createGame("espanha", "13:00", "costa-rica") +
      createGame("bélgica", "16:00", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suíça", "07:00", "camarões") +
      createGame("uruguai", "10:00", "coreia-do-sul") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", "irã") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "usa")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunísia", "07:00", "austrália") +
      createGame("polônia", "10:00", "saudita") +
      createGame("frança", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "méxico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costa-rica") +
      createGame("bélgica", "10:00", "marrocos") +
      createGame("croácia", "13:00", "canadá") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia") +
      createGame("coreia-do-sul", "10:00", "gana") +
      createGame("brasil", "13:00", "suíça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "07:00", "senegal") +
      createGame("holanda", "10:00", "catar") +
      createGame("irã", "13:00", "usa") +
      createGame("gales", "16:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "07:00", "frança") +
      createGame("austrália", "10:00", "dinamarca") +
      createGame("polônia", "13:00", "argentina") +
      createGame("saudita", "16:00", "méxico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croácia", "07:00", "bélgica") +
      createGame("canadá", "10:00", "marrocos") +
      createGame("japão", "13:00", "espanha") +
      createGame("costa-rica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreia-do-sul", "07:00", "portugal") +
      createGame("gana", "10:00", "uruguai") +
      createGame("sérvia", "13:00", "suíça") +
      createGame("camarões", "16:00", "brasil")
  )

document.addEventListener("click", cardDinamic)
