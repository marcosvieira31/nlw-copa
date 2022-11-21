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
  if (cardTitulo.tagName === "H2") {
    let divCard = cardTitulo.nextElementSibling
    let jogos = cardTitulo.nextElementSibling.children[0].children

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
        jogos[i].setAttribute(
          "style",
          "display:none; color:var(--white-primary);"
        )
      }

      divCard.setAttribute("name", "closed")
    }
  }
}

function mostrarGrupos() {
  let painelGrupos = document.getElementById("grupos")
  let paineis = document.getElementsByTagName("main")
  for (let i = 0; i < paineis.length; i++) {
    paineis.item(i).setAttribute("style", "display:none;")
  }
  painelGrupos.setAttribute("style", "display:block")
  let botoes = document.getElementsByClassName("bt-menu")
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].setAttribute("style", "color: var(--white-primary)")
  }
  let btGrupos = document.getElementById("bt-grupos")
  btGrupos.setAttribute("style", "color:var(--card-color-primary)")
}

function mostrarCalendario() {
  let painelCalendario = document.getElementById("calendario")
  let paineis = document.getElementsByTagName("main")
  for (let i = 0; i < paineis.length; i++) {
    paineis.item(i).setAttribute("style", "display:none")
  }
  painelCalendario.setAttribute("style", "display:block")
  let botoes = document.getElementsByClassName("bt-menu")
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].setAttribute("style", "color: var(--white-primary)")
  }
  let btCalendario = document.getElementById("bt-calendario")
  btCalendario.setAttribute("style", "color:var(--card-color-primary)")
}

function mostrarEliminatorias() {
  let painelEliminatorias = document.getElementById("eliminatorias")
  let paineis = document.getElementsByTagName("main")
  for (let i = 0; i < paineis.length; i++) {
    paineis.item(i).setAttribute("style", "display:none")
  }
  painelEliminatorias.setAttribute("style", "display:block")
  let botoes = document.getElementsByClassName("bt-menu")
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].setAttribute("style", "color: var(--white-primary)")
  }
  let btEliminatorias = document.getElementById("bt-eliminatorias")
  btEliminatorias.setAttribute("style", "color:var(--card-color-primary)")
}

function mostrarConvocacoes() {
  let painelConvocacoes = document.getElementById("convocacoes")
  let paineis = document.getElementsByTagName("main")
  for (let i = 0; i < paineis.length; i++) {
    paineis.item(i).setAttribute("style", "display:none")
  }
  painelConvocacoes.setAttribute("style", "display:block")
  let botoes = document.getElementsByClassName("bt-menu")
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].setAttribute("style", "color: var(--white-primary)")
  }
  let btConvocacoes = document.getElementById("bt-convocacoes")
  btConvocacoes.setAttribute("style", "color:var(--card-color-primary)")
}

function createNation(flag, nation) {
  return `
    <li style="display:none">
      <img src="./assets/icon-${flag}.svg" alt="Bandeira do ${flag}" />
      <strong>${nation}</strong>
    </li>
  `
}

function createGroups(group, nations) {
  return `
    <section class="group-container">
    <h2><span>Grupo</span>${group}</h2>
    <div class="group" name="closed">
          <ul>${nations}</ul>
    </div>
    </section>
  `
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

document.querySelector("#groups").innerHTML =
  createGroups(
    "A",
    createNation("catar", "Catar") +
      createNation("equador", "Equador") +
      createNation("senegal", "Senegal") +
      createNation("holanda", "Holanda")
  ) +
  createGroups(
    "B",
    createNation("inglaterra", "Inglaterra") +
      createNation("irã", "Irã") +
      createNation("usa", "Estados Unidos") +
      createNation("gales", "País de Gales")
  ) +
  createGroups(
    "C",
    createNation("argentina", "Argentina") +
      createNation("saudita", "Arábia Saudita") +
      createNation("méxico", "México") +
      createNation("polônia", "Polônia")
  ) +
  createGroups(
    "D",
    createNation("frança", "França") +
      createNation("austrália", "Austrália") +
      createNation("dinamarca", "Dinamarca") +
      createNation("tunísia", "Tunísia")
  ) +
  createGroups(
    "E",
    createNation("espanha", "Espanha") +
      createNation("costa-rica", "Costa Rica") +
      createNation("alemanha", "Alemanha") +
      createNation("japão", "Japão")
  ) +
  createGroups(
    "F",
    createNation("bélgica", "Bélgica") +
      createNation("canadá", "Canadá") +
      createNation("marrocos", "Marrocos") +
      createNation("croácia", "Croácia")
  ) +
  createGroups(
    "G",
    createNation("brasil", "Brasil") +
      createNation("sérvia", "Sérvia") +
      createNation("suíça", "Suíça") +
      createNation("camarões", "Camarões")
  ) +
  createGroups(
    "H",
    createNation("portugal", "Portugal") +
      createNation("gana", "Gana") +
      createNation("uruguai", "Uruguai") +
      createNation("coreia-do-sul", "Coreia do Sul")
  )

function sbAction() {
  let sideBar = document.getElementById("side-bar")
  let sbControl = document.getElementById("sb-button").getAttribute("name")
  console.log(sbControl)
  if (sbControl == "closed") {
    sideBar.setAttribute("style", "display: flex")
    document.getElementById("sb-button").setAttribute("name", "open")
  } else {
    sideBar.setAttribute("style", "display: none")
    document.getElementById("sb-button").setAttribute("name", "closed")
  }
}
