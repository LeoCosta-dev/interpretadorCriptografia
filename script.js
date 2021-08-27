/*.charCodeAt() - transforma letra em número da tabela ascii
String.fromCharCode(b) - faz o inverso do de cima */
var mensagem = "eu amo paçoca"
var incremento = 2

function cifrado(){
    var mensagemArr = mensagem.split('')
    var mensagemCifrada = []
    var codificadorArr = []
    
    for (var i = 0; mensagemArr.length > i; i++){
        if (mensagemArr[i] !== ' '){
            codificadorArr.push((mensagemArr[i].charCodeAt()) + incremento)
        }else{
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (var j = 0; codificadorArr.length > j; j++){
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}
function decifrado(){
    var mensagemArr = mensagem.split('')
    var mensagemCifrada = []
    var codificadorArr = []
    
    for (var i = 0; mensagemArr.length > i; i++){
        if (mensagemArr[i] !== ' '){
            codificadorArr.push((mensagemArr[i].charCodeAt()) - incremento)
        }else{
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (var j = 0; codificadorArr.length > j; j++){
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}