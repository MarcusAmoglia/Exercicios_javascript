//Ex 07: Crie uma função chamada calcularMedia que recebe três notas como parâmetros e retorna a média aritmética.

function calcular_media(media,media2,media3){
    let calculo_media = (media+media2+media3)/3
    console.log(`Nota 1: ${media}\nNota 2: ${media2}\nNota 3: ${media3}\nMédia das notas: ${calculo_media}`)
}

calcular_media(5,8,9)