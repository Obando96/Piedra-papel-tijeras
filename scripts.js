var puntajeHumano = document.querySelector('.puntajeHumano'),
    puntajeComputadora = document.querySelector('.puntajeComputadora'),
    resultado = document.querySelector('.contenedorResultado'),
    piedra = document.getElementById('piedra'),
    papel = document.getElementById('papel'),
    tijeras = document.getElementById('tijeras'),
    piedraC = document.getElementById('piedraC'),
    papelC = document.getElementById('papelC'),
    computerSelection, playerSelection,
    tijerasC = document.getElementById('tijerasC'),
    contJugador = 0, contComputadora = 0, empate = "", usuario;

var overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
    btnJugar = document.getElementById('btn-submit'),
    h4 = document.querySelector('h4');

piedra.addEventListener("click", () => {
    playGame("piedra");
});
papel.addEventListener("click", () => {
    playGame("papel");
});
tijeras.addEventListener("click", () => {
    playGame("tijeras");
});

function NumeroAleatorio() {
    usuario = Math.floor((Math.random() * (4 - 1)) + 1);

    if (usuario == 1) {
        return "piedra"
    } else
        if (usuario == 2) {
            return "papel"
        } else {
            return "tijeras"
        }

}

function computerPlay() {
    computerSelection = NumeroAleatorio();
    if (computerSelection == "piedra") {
        piedraC.classList.add('input2');
        removerEfectoComputadora()
    } else if (computerSelection == "papel") {
        papelC.classList.add('input2');
        removerEfectoComputadora()
    } else {
        tijerasC.classList.add('input2');
        removerEfectoComputadora()
    }
    return 0;
}

function playGame(playerSelection) {
    computerPlay();
    console.log("Computadora: " + computerSelection);
    console.log("Humano: " + playerSelection);
    if (playerSelection === "piedra" && computerSelection == "piedra" ||
        playerSelection === "papel" && computerSelection == "papel" ||
        playerSelection === "tijeras" && computerSelection == "tijeras") {
        console.log("EMPATE");
        resultado.textContent = "EMPATE"
    } else if (playerSelection === "piedra" && computerSelection == "tijeras" ||
        playerSelection === "papel" && computerSelection == "piedra" ||
        playerSelection === "tijeras" && computerSelection == "papel") {
        contJugador++;
        console.log(contJugador);
        puntajeHumano.textContent = "" + contJugador;
        resultado.textContent = "GANASTE"
        
    } else {
        contComputadora++;
        console.log(contComputadora);
        puntajeComputadora.textContent = "" + contComputadora;
        resultado.textContent = "PERDISTE"
        
    }
    mostrarResultado();
}
function mostrarResultado(){
    if (contJugador == 5) {
        overlay.classList.add('active');
        popup.classList.add('active');

        btnCerrarPopup.addEventListener('click', function(){
            overlay.classList.remove('active');
            popup.classList.remove('active');
            location. reload();
        })
        btnJugar.addEventListener('click', function(){
            overlay.classList.remove('active');
            popup.classList.remove('active');
            location. reload();
        })

    }else if (contComputadora == 5) {
        overlay.classList.add('active');
        h4.textContent = "HAS PERDIDO LA PARTIDA"
        popup.classList.add('active');
        btnCerrarPopup.addEventListener('click', function(){
            overlay.classList.remove('active');
            popup.classList.remove('active');
            location. reload();
        })
        btnJugar.addEventListener('click', function(){
            overlay.classList.remove('active');
            popup.classList.remove('active');
            location. reload();
        })

    }
}

function removerEfectoComputadora(){
    setTimeout(function(){
        piedraC.classList.remove('input2');
    }, 1000)
    setTimeout(function(){
        papelC.classList.remove('input2');
    }, 1000)
    setTimeout(function(){
        tijerasC.classList.remove('input2');
    }, 1000)
}



