function voltar() {
  document.body.classList.remove(document.body.classList.item(1));

  var mudaHeader = document.querySelector("header img");
  mudaHeader.classList.remove("aluraflix-logo");

  var mudaMain = document.querySelector("main");
  mudaMain.innerHTML = `<h1>Minha lista de favoritos:</h1>
  <div class="filmes-capa">
      <img src="https://cinemaemcena.com.br/uploads/criticas_old/filmes-1983-cartazes-2391.jpg" onclick="mostrafilme1()">
          <img src="https://imgsnotigram.s3.amazonaws.com/uploads/2020/12/b2fd17b21c1b73178ee4495ef335d221.jpg" onclick="mostrafilme2()">
          <img src="https://br.web.img3.acsta.net/medias/nmedia/18/90/78/52/20295598.jpg" onclick="mostrafilme3()">
          <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/Meangirls.jpg/245px-Meangirls.jpg" onclick="mostrafilme4()">
  </div>`
}

function mostrafilme1() {
  document.body.classList.add("background-constantine");

  //cria uma div e coloca um classe
  var opacidade = document.createElement("div");
  opacidade.classList.add("background-opacidade");

  //esvazia o body
  var body = document.querySelector("body");
  body.innerHTML = "";

  // coloca conteúdo dentro da div e coloca a div dentro do body
  opacidade.innerHTML = `<header>
  <img src="https://fontmeme.com/permalink/220915/dc37cc1a0e9f2f85df03cff0fd296c87.png" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
  <div class="titulo-estrelas-linha">
      <div class="titulo-estrelas">
          <h1>Constantine</h1>
      </div>
      <div class="linha"></div>
  </div>
  <h3>John Constantine é um experiente ocultista e exorcista que, literalmente, chegou ao inferno. Juntamente com Angela Dodson, uma policial cética, ele investiga o misterioso assassinato da irmã gêmea dela, Isabel. As investigações levam a dupla a um mundo sombrio, em que precisam lidar com demônios e anjos malvados.</h3>
  <button onclick="voltar()">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z' fill='rgba(229,229,229,1)'/%3E%3C/svg%3E" class="seta-butao">
      <p>Voltar</p>
  </button>
</main>`

  body.appendChild(opacidade);
}

function mostrafilme2() {
  document.body.classList.add("background-harrypotter");

  var opacidade = document.createElement("div");
  opacidade.classList.add("background-opacidade");

  var body = document.querySelector("body");
  body.innerHTML = "";

  opacidade.innerHTML = `<header>
  <img src="https://fontmeme.com/permalink/220915/dc37cc1a0e9f2f85df03cff0fd296c87.png" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
  <div class="titulo-estrelas-linha">
      <div class="titulo-estrelas">
          <h1>Harry Potter</h1>
      </div>
      <div class="linha"></div>
  </div>
  <h3>Harry Potter é um jovem comum de 11 anos até que recebe uma carta para estudar na Escola de Magia e Bruxaria de Hogwarts, onde ele descobre ser, na verdade, um bruxo. Nela, o garoto conquista a amizade de Hagrid, além de Hermione e Ron. No entanto, ele descobre ter um grande inimigo, o terrível Voldemort.</h3>
  <button onclick="voltar()">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z' fill='rgba(229,229,229,1)'/%3E%3C/svg%3E" class="seta-butao">
      <p>Voltar</p>
  </button>
</main>`
  body.appendChild(opacidade);
}

function mostrafilme3() {
  document.body.classList.add("background-asvantagensdeserinvisivel");

  var opacidade = document.createElement("div");
  opacidade.classList.add("background-opacidade");

  var body = document.querySelector("body");
  body.innerHTML = "";

  opacidade.innerHTML = `<header>
  <img src="https://fontmeme.com/permalink/220915/dc37cc1a0e9f2f85df03cff0fd296c87.png" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
  <div class="titulo-estrelas-linha">
      <div class="titulo-estrelas">
          <h1>As Vantagens de ser Invisível</h1>
      </div>
      <div class="linha"></div>
  </div>
  <h3>Um jovem tímido se esconde em seu próprio mundo até conhecer dois irmãos que o ajudam a viver novas experiências. Embora esteja feliz nessa nova fase, ele não esquece as tristezas do passado, que têm origem em uma chocante revelação.
  </h3>
  <button onclick="voltar()">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z' fill='rgba(229,229,229,1)'/%3E%3C/svg%3E" class="seta-butao">
      <p>Voltar</p>
  </button>
</main>`
  body.appendChild(opacidade);
}

function mostrafilme4() {
  document.body.classList.add("background-meninasmalvadas");

  var opacidade = document.createElement("div");
  opacidade.classList.add("background-opacidade");

  var body = document.querySelector("body");
  body.innerHTML = "";

  opacidade.innerHTML = `<header>
  <img src="https://fontmeme.com/permalink/220915/dc37cc1a0e9f2f85df03cff0fd296c87.png" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
  <div class="titulo-estrelas-linha">
      <div class="titulo-estrelas">
          <h1>Meninas Malvadas</h1>
      </div>
      <div class="linha"></div>
  </div>
  <h3>A adolescente Cady Heron foi educada na África pelos seus pais cientistas. Quando sua família se muda para o subúrbio, nos Estados Unidos, Cady começa a frequentar a escola pública e recebe uma rápida introdução às leis de popularidade que dividem seus colegas. Sem querer, ela acaba no meio de um grupo de elite de estudantes apelidadas "as poderosas".</h3>
  <button onclick="voltar()">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z' fill='rgba(229,229,229,1)'/%3E%3C/svg%3E" class="seta-butao">
      <p>Voltar</p>
  </button>
</main>`
  body.appendChild(opacidade);
}