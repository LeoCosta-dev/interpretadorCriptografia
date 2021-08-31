// .charCodeAt() - transforma letra em número da tabela ascii
// String.fromCharCode(b) - faz o inverso do de cima
// de 97 até 122 são as minusculas na ascii
// de 65 até 90 maiusculas na ascii

// atribuição das variáveis globais

// guarda a mensagem passada pelo usuário
var mensagem = document.getElementById('entradas')

// apenas Number, guarda a chave para cifra de César
var incremento = document.getElementById('adiciona')

// retorna mensagem criptografada ou decriptografada
var retornoMensagem 

// guarda o metodo escolhido pelo usuário
var metodo 

// guarda a ação desejada pelo usuário
var cripDecrip 


mensagem.onkeyup = function () {
    console.log("passei")
    mensagem = mensagem.value
    let msgCode = codificador()
    retornoMensagem = document.getElementById('resultadoBase')
    retornoMensagem.value = codificador()
    return
}

// motor para Cifra de César
function cifrado() {
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []

    for (let i = 0; mensagemArr.length > i; i++) {
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90) {
            let teste = ((mensagemArr[i].charCodeAt()) - 65 + incremento) % 26
            codificadorArr.push(teste + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122) {
            let teste = ((mensagemArr[i].charCodeAt()) - 97 + incremento) % 26
            codificadorArr.push(teste + 97)
        } else {
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (let j = 0; codificadorArr.length > j; j++) {
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}
function decifrado() {
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []

    for (let i = 0; mensagemArr.length > i; i++) {
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90) {
            let teste = ((mensagemArr[i].charCodeAt()) - 65 - incremento) % 26
            codificadorArr.push((teste < 0 ? teste + 26 : teste) + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122) {
            let teste = ((mensagemArr[i].charCodeAt()) - 97 - incremento) % 26
            codificadorArr.push((teste < 0 ? teste + 26 : teste) + 97)
        } else {
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (let j = 0; codificadorArr.length > j; j++) {
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}

// motor para utilizar base64

function codificador() {
    let mensagemCodificada = btoa(mensagem)

    return mensagemCodificada

}

function decodifica() {
    let mensagemCodificada = atob(mensagem)

    return mensagemCodificada

}
