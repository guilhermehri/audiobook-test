const playpauseAudio = document.getElementById("play-pause");
const proximoAudio = document.getElementById("next");
const anteriorAudio = document.getElementById("return");
const audio = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");

const quantidadeCapitulos = 10;
let taTocando = false;
let capitulo = 1;

function tocarAudio(){
    playpauseAudio.classList.remove("bi-play-circle-fill");
    playpauseAudio.classList.add("bi-pause-circle-fill");
    audio.play();
    taTocando = true;
}

function pausarAudio(){
    playpauseAudio.classList.remove("bi-pause-circle-fill");
    playpauseAudio.classList.add("bi-play-circle-fill");
    audio.pause();
    taTocando = false;
}

function botaoTocarOuPausarAudio(){
    if( taTocando === true) {
        pausarAudio();
    }
    else {
        tocarAudio();
    }
}

function botaoProximoAudio(){
    if(capitulo < quantidadeCapitulos)
    {
        capitulo += 1;
    }
    else
    {
        capitulo = 1;
    }
    audio.src = "./books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capitulo " + capitulo;
    tocarAudio();
}


proximoAudio.addEventListener("click", botaoProximoAudio);
playpauseAudio.addEventListener("click", botaoTocarOuPausarAudio);





