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
    createGame("inglaterra", "6", "10:00", "2", "ir??") +
      createGame("senegal", "0", "13:00", "2", "holanda") +
      createGame("usa", "1", "16:00", "1", "gales")
  ) +
  createCard(
    "22/11",
    "ter??a",
    createGame("argentina", "1", "07:00", "2", "saudita") +
      createGame("dinamarca", "0", "10:00", "0", "tun??sia") +
      createGame("m??xico", "0", "13:00", "0", "pol??nia") +
      createGame("fran??a", "4", "16:00", "1", "austr??lia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "0", "07:00", "0", "cro??cia") +
      createGame("alemanha", "1", "10:00", "2", "jap??o") +
      createGame("espanha", "7", "13:00", "0", "costa-rica") +
      createGame("b??lgica", "1", "16:00", "0", "canad??")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("su????a", "1", "07:00", "0", "camar??es") +
      createGame("uruguai", "0", "10:00", "0", "coreia-do-sul") +
      createGame("portugal", "3", "13:00", "2", "gana") +
      createGame("brasil", "2", "16:00", "0", "s??rvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "0", "07:00", "2", "ir??") +
      createGame("catar", "1", "10:00", "3", "senegal") +
      createGame("holanda", "1", "13:00", "1", "equador") +
      createGame("inglaterra", "0", "16:00", "0", "usa")
  ) +
  createCard(
    "26/11",
    "s??bado",
    createGame("tun??sia", "0", "07:00", "1", "austr??lia") +
      createGame("pol??nia", "2", "10:00", "0", "saudita") +
      createGame("fran??a", "2", "13:00", "1", "dinamarca") +
      createGame("argentina", "2", "16:00", "0", "m??xico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("jap??o", "0", "07:00", "1", "costa-rica") +
      createGame("b??lgica", "0", "10:00", "2", "marrocos") +
      createGame("cro??cia", "4", "13:00", "1", "canad??") +
      createGame("espanha", "1", "16:00", "1", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camar??es", "3", "07:00", "3", "s??rvia") +
      createGame("coreia-do-sul", "2", "10:00", "3", "gana") +
      createGame("brasil", "1", "13:00", "0", "su????a") +
      createGame("portugal", "2", "16:00", "0", "uruguai")
  ) +
  createCard(
    "29/11",
    "ter??a",
    createGame("equador", "1", "07:00", "2", "senegal") +
      createGame("holanda", "2", "10:00", "0", "catar") +
      createGame("ir??", "0", "13:00", "1", "usa") +
      createGame("gales", "0", "16:00", "3", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tun??sia", "1", "07:00", "0", "fran??a") +
      createGame("austr??lia", "1", "10:00", "0", "dinamarca") +
      createGame("pol??nia", "0", "13:00", "2", "argentina") +
      createGame("saudita", "1", "16:00", "2", "m??xico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("cro??cia", "0", "07:00", "0", "b??lgica") +
      createGame("canad??", "1", "10:00", "2", "marrocos") +
      createGame("jap??o", "2", "13:00", "1", "espanha") +
      createGame("costa-rica", "2", "16:00", "4", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreia-do-sul", "2", "07:00", "1", "portugal") +
      createGame("gana", "0", "10:00", "2", "uruguai") +
      createGame("s??rvia", "2", "13:00", "3", "su????a") +
      createGame("camar??es", "1", "16:00", "0", "brasil")
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
      createNation("ir??", "Ir??") +
      createNation("usa", "Estados Unidos") +
      createNation("gales", "Pa??s de Gales")
  ) +
  createGroups(
    "C",
    createNation("argentina", "Argentina") +
      createNation("saudita", "Ar??bia Saudita") +
      createNation("m??xico", "M??xico") +
      createNation("pol??nia", "Pol??nia")
  ) +
  createGroups(
    "D",
    createNation("fran??a", "Fran??a") +
      createNation("austr??lia", "Austr??lia") +
      createNation("dinamarca", "Dinamarca") +
      createNation("tun??sia", "Tun??sia")
  ) +
  createGroups(
    "E",
    createNation("espanha", "Espanha") +
      createNation("costa-rica", "Costa Rica") +
      createNation("alemanha", "Alemanha") +
      createNation("jap??o", "Jap??o")
  ) +
  createGroups(
    "F",
    createNation("b??lgica", "B??lgica") +
      createNation("canad??", "Canad??") +
      createNation("marrocos", "Marrocos") +
      createNation("cro??cia", "Cro??cia")
  ) +
  createGroups(
    "G",
    createNation("brasil", "Brasil") +
      createNation("s??rvia", "S??rvia") +
      createNation("su????a", "Su????a") +
      createNation("camar??es", "Camar??es")
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
