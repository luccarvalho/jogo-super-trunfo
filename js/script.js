var carta1 = {
  nome: "Mandalorian",
  imagem: "https://thecollector.ir/wp-content/uploads/2021/01/image.jpg",
  atributos: { ataque: 7, defesa: 7, magia: 5 }
};

var carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://www.showmetech.com.br/wp-content/uploads//2016/09/Star-Wars-Darth-Vader.jpg",
  atributos: { ataque: 9, defesa: 8, magia: 9 }
};

var carta3 = {
  nome: "Luke Skywalker",
  imagem:
    "https://www.greenscene.co.id/wp-content/uploads/2021/07/Lightsaber-696x497.jpg",
  atributos: { ataque: 8, defesa: 9, magia: 6 }
};

var carta4 = {
  nome: "Yoda",
  imagem: "https://i1.sndcdn.com/artworks-wn2YnukPFAjlW5dR-nShKyw-t500x500.jpg",
  atributos: { ataque: 6, defesa: 8, magia: 10 }
};

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 4);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 4);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var modalResultado = document.getElementById("modal");
  var fade = document.getElementById("fade");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Perdeu!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  modalResultado.classList.toggle("hide");
  fade.classList.toggle("hide");
  modalResultado.innerHTML += htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}