agora = new Date()
diasem = agora.getDay()
/*
0 - domingo
1 - segunda 
2 - terca 
3 - quarta
4 - quinta
5 - sexta
6 - sabado
*/
switch(diasem){
    
    case 0:
    console.log('Hoje é domingo')
        break
    case 1: 
    console.log('Hoje é segunda')
    case 2:
    console.log('Hoje é terca')
        break
    case 3:
    console.log('Hoje é quarta')
        break
    case 4:
    console.log('Hoje é quinta')
        break
    case 5:
    console.log('Hoje é sexta')
        break
    case 6:
    console.log('Hoje é sabado')
        break
    default:
        console.log('[ERRO]')
        break
}


