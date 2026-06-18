//Sidebar - responsivo
let sideMenu = document.getElementById("menu");

function toggleMenu() {
    event.preventDefault();
    sideMenu.classList.toggle("menu_open");
}

//Perguntas
let perguntaUm = document.getElementById("pergunta1");
let perguntaDois = document.getElementById("pergunta2");
let perguntaTres = document.getElementById("pergunta3");
let perguntaQuatro = document.getElementById("pergunta4");

function menuP1() {
    perguntaUm.classList.toggle("resposta_aberta");
}

function menuP2() {
    perguntaDois.classList.toggle("resposta_aberta");
}

function menuP3() {
    perguntaTres.classList.toggle("resposta_aberta");
}

function menuP4() {
    perguntaQuatro.classList.toggle("resposta_aberta");
}

//Validação de formulário de contato
const nome = document.querySelector("#form_name");
const email = document.querySelector("#form_email");
const assunto = document.querySelector("#form_assunto");
const mensagem = document.querySelector("#form_mensagem");
const formContato = document.querySelector("#form_contato");

if (formContato) {
    formContato.addEventListener("submit", (e) => {
        let enviarForm = true;

        if (nome.value.length < 3) {
            alert("Digite um nome válido!");
            enviarForm = false;
        }

        if (!email.value) {
            alert("Digite um e-mail válido!");
            enviarForm = false;
        }

        if (!enviarForm) {
            e.preventDefault();
        }
    })
}

//Mudar tipo de acesso
const mudarCadastrar = document.querySelector('.cadastrar');
const mudarEntrar = document.querySelector('.entrar');

function alterarCadastrar() {
    if (window.event) window.event.preventDefault();

    mudarCadastrar.style.display = 'flex';
    mudarEntrar.style.display = 'none';

    document.title = "Criar uma conta | PetVida";
}

function alterarEntrar() {
    if (window.event) window.event.preventDefault();

    mudarEntrar.style.display = 'flex';
    mudarCadastrar.style.display = 'none';

    document.title = "Entrar | PetVida";
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("article_servico_slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}
