var ligado = mutado =false;
var audio_novo = document.getElementsByTagName('audio')[0]
var volume = velocidade_audio = 1
var barra_volume = 25;
var time_temp_s = time_temp_m = temp_width = 0
var temp_div_width = document.getElementById('temp')


function ligar(e){
    if(!ligado){
        ligado = true;
        e.setAttribute('src', './imagens/pause.png')
        audio_novo.play()
        document.getElementById('div_meio').innerHTML = '<img id="meio" src="./imagens/audiobars.gif" alt="audio">'
    }
    else {
        ligado = false;
        e.setAttribute('src', './imagens/play.png')
        audio_novo.pause()
        document.getElementById('div_meio').innerHTML = "<div id='nada'></div>"
    }
}

function parar(){
    if(ligado){
        document.getElementsByClassName('but')[0].setAttribute('src', './imagens/play.png')
        ligado = false
    }
    audio_novo.pause()
    audio_novo.currentTime = 0.0;
    audio_novo.playbackRate = 1;
    document.getElementById('div_meio').innerHTML = "<div id='nada'></div>"
}

function mais_15(){
    audio_novo.currentTime += 15
    temp_width += (0.20 * 15)
    time_temp_s += 15 
    temp_div_width.style.width = `${temp_width}rem` 
    document.getElementById('volume_todo').style.width = `${barra_volume}rem`

}

function menos_15(){
    audio_novo.currentTime -= 15    
    if (time_temp_s >= 15){
        time_temp_s -= 15 
        temp_width -= (0.20 * 15)
    }
    else {
        time_temp_s = -1
        temp_width = 0
    }
    temp_div_width.style.width = `${temp_width}rem` 
    
    document.getElementById('volume_todo').style.width = `${barra_volume}rem`

}

function mais_velo(){
    if(velocidade_audio < 15){
        velocidade_audio += 0.2
        audio_novo.playbackRate = velocidade_audio
    }
}

function menos_velo(){
    if(velocidade_audio >= 0.3 ){
        velocidade_audio -= 0.2
        audio_novo.playbackRate = velocidade_audio
    }
}

function mudo(){
    if(!mutado){
        audio_novo.muted = true
        mutado = true
    }
    else{
        audio_novo.muted = false
        mutado = false
    } 
    
}

function menos_vol(){
    if(volume >= 0.1) {
        volume -= 0.1
        audio_novo.volume = volume;
        barra_volume -= 2.5
        document.getElementById('volume_todo').style.width = `${barra_volume}rem`
    }
}

function mais_vol(){
    if(volume < 1) {
        volume += 0.1
        audio_novo.volume = volume;
        barra_volume += 2.5
        document.getElementById('volume_todo').style.width = `${barra_volume}rem`
    }
    
}


setInterval(function(){
    if(ligado){
        time_temp_s += (1 * velocidade_audio)
        temp_width += 0.20 * velocidade_audio
        temp_div_width.style.width = `${temp_width}rem` 
        if(time_temp_s >=60){
            time_temp_s -= 60
            time_temp_m += 1
        }
        if(time_temp_s >= 34 && time_temp_m >= 2){
            time_temp_s = time_temp_m = temp_width = 0
            barra_volume = 25
            volume = velocidade_audio = 1
            ligado = mutado = false
            audio_novo.currentTime = 0.0;
            document.getElementById('volume_todo').style.width = `${barra_volume}rem`
            temp_div_width.style.width = `${temp_width}rem`     
            document.getElementsByClassName('but')[0].setAttribute('src', './imagens/play.png')
            document.getElementById('div_meio').innerHTML = "<div id='nada'></div>"
            audio_novo.pause()
        }

        document.getElementById('tempo').innerHTML = `<h1>${time_temp_m}:${time_temp_s}</h1>`
    }
}, (1000 * velocidade_audio))



