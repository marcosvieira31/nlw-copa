function createGame(player1, gols1, hour, gols2, player2) {
  return `
    <li style="display:none">
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <h3>${gols1}</h3>
      <strong>${hour}</strong>
      <h3>${gols2}</h3>
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

let sideBar = document.getElementById("side-bar")

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

document.addEventListener("click", cardDinamic)

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("catar", "0", "13:00", "2", "equador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "6", "10:00", "2", "irã") +
      createGame("senegal", "0", "13:00", "2", "holanda") +
      createGame("usa", "1", "16:00", "1", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "1", "07:00", "2", "saudita") +
      createGame("dinamarca", "0", "10:00", "0", "tunísia") +
      createGame("méxico", "0", "13:00", "0", "polônia") +
      createGame("frança", "4", "16:00", "1", "austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "0", "07:00", "0", "croácia") +
      createGame("alemanha", "1", "10:00", "2", "japão") +
      createGame("espanha", "7", "13:00", "0", "costa-rica") +
      createGame("bélgica", "1", "16:00", "0", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suíça", "1", "07:00", "0", "camarões") +
      createGame("uruguai", "0", "10:00", "0", "coreia-do-sul") +
      createGame("portugal", "3", "13:00", "2", "gana") +
      createGame("brasil", "2", "16:00", "0", "sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "0", "07:00", "2", "irã") +
      createGame("catar", "1", "10:00", "3", "senegal") +
      createGame("holanda", "1", "13:00", "1", "equador") +
      createGame("inglaterra", "0", "16:00", "0", "usa")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunísia", "0", "07:00", "1", "austrália") +
      createGame("polônia", "2", "10:00", "0", "saudita") +
      createGame("frança", "2", "13:00", "1", "dinamarca") +
      createGame("argentina", "2", "16:00", "0", "méxico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "0", "07:00", "1", "costa-rica") +
      createGame("bélgica", "0", "10:00", "2", "marrocos") +
      createGame("croácia", "4", "13:00", "1", "canadá") +
      createGame("espanha", "1", "16:00", "1", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarões", "3", "07:00", "3", "sérvia") +
      createGame("coreia-do-sul", "2", "10:00", "3", "gana") +
      createGame("brasil", "1", "13:00", "0", "suíça") +
      createGame("portugal", "2", "16:00", "0", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "1", "07:00", "2", "senegal") +
      createGame("holanda", "2", "10:00", "0", "catar") +
      createGame("irã", "0", "13:00", "1", "usa") +
      createGame("gales", "0", "16:00", "3", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "1", "07:00", "0", "frança") +
      createGame("austrália", "1", "10:00", "0", "dinamarca") +
      createGame("polônia", "0", "13:00", "2", "argentina") +
      createGame("saudita", "1", "16:00", "2", "méxico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croácia", "0", "07:00", "0", "bélgica") +
      createGame("canadá", "1", "10:00", "2", "marrocos") +
      createGame("japão", "2", "13:00", "1", "espanha") +
      createGame("costa-rica", "2", "16:00", "4", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreia-do-sul", "2", "07:00", "1", "portugal") +
      createGame("gana", "0", "10:00", "2", "uruguai") +
      createGame("sérvia", "2", "13:00", "3", "suíça") +
      createGame("camarões", "1", "16:00", "0", "brasil")
  )

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
  let btsGrupos = document.getElementById("bts-grupos")
  btGrupos.setAttribute("style", "color:var(--card-color-primary)")
  btsGrupos.setAttribute("style", "color:var(--card-color-primary)")

  sideBar.setAttribute("style", "display:none")
  document.getElementById("sb-button").setAttribute("name", "closed")
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
  let btsCalendario = document.getElementById("bts-calendario")
  btCalendario.setAttribute("style", "color:var(--card-color-primary)")
  btsCalendario.setAttribute("style", "color:var(--card-color-primary)")

  sideBar.setAttribute("style", "display:none")
  document.getElementById("sb-button").setAttribute("name", "closed")
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
  let btsEliminatorias = document.getElementById("bts-eliminatorias")
  btEliminatorias.setAttribute("style", "color:var(--card-color-primary)")
  btsEliminatorias.setAttribute("style", "color:var(--card-color-primary)")

  sideBar.setAttribute("style", "display:none")
  document.getElementById("sb-button").setAttribute("name", "closed")
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
  let btsConvocacoes = document.getElementById("bts-convocacoes")
  btConvocacoes.setAttribute("style", "color:var(--card-color-primary)")
  btsConvocacoes.setAttribute("style", "color:var(--card-color-primary)")

  sideBar.setAttribute("style", "display:none")
  document.getElementById("sb-button").setAttribute("name", "closed")
}
