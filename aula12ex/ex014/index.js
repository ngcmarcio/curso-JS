function carregar(){
    var mensagem =document.getElementById('msg')
    var hrmsg = document.getElementById('hr')
    var imgn = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    //hrmsg.innerHTML = `Agora são ${agora} Horas`
    mensagem.innerHTML = `Agora são ${hora} Horas`
    if (hora >=0 && hora < 12){
        imgn.src = 'manha.png'
        document.body.style.background = '#fdc43d'
    }else if(hora >= 12 && hora < 18){
        imgn.src = 'tarde.png'
        document.body.style.background = '#dfcab2'
    }else if(hora >= 18 && hora < 23){
        imgn.src = 'noite.png'
        document.body.style.background = '#a15763'
    }

}