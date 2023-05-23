var agora = new Date()
var hora = agora.getHours
console.log(`àgora sao exatamente ${agora} horas`)
if ( hora <= 12 && hora >= 5 ){
    console.log('bom dia')
}else if (hora <=  18 && hora > 12){
    console.log('boa tarde')
}else if (hora <= 4 && hora > 1){
    console.log('boa madrugada')
}else {
    console.log('boa noite')
}