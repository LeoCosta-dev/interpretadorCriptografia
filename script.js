// .charCodeAt() - transforma letra em número da tabela ascii
// String.fromCharCode(b) - faz o inverso do de cima
// de 97 até 122 são as minusculas na ascii
// de 65 até 90 maiusculas na ascii

// atribuição das variáveis globais

// guarda a mensagem passada pelo usuário
var mensagem
var input = document.getElementById('entradas')
// retorna mensagem criptografada ou decriptografada
var incremento

//Eventos
document.getElementById('enviar').onclick = function(){
    mensagem = input.value
    let cifra = document.getElementById('cesar')
    let base = document.getElementById('metCript2')
    let cripto = document.getElementById('cripto') , decripto = document.getElementById('met2')
    if(cripto.checked){
        if(cifra.checked){
            incremento = parseInt(document.getElementById('adiciona').value)
            document.getElementById('resultadoCifra').innerText = cifrado()
        }else if(base.checked){
            document.getElementById('resultadoBase').innerText = codificador()
        }
    }else if(decripto.checked){
        if(cifra.checked){
            incremento = parseInt(document.getElementById('adiciona').value)
            document.getElementById('resultadoCifra').innerText = decifrado()
        }else if(base.checked){
            document.getElementById('resultadoBase').innerText = decodificado()
        }
    }
}

document.getElementById('escolherMetodo').onclick = function(){
    let selecionado = document.getElementById('cesar')
    if(selecionado.checked){
        document.getElementById('cifra').style.display = 'flex'
        document.getElementById('base').style.display = 'none'
        document.querySelector("body").style.backgroundImage = 'url(image/destinations-rome-banner-mobile-1024x553.jpg)'
        
    }else if(document.getElementById('metCript2').checked){
        document.getElementById('base').style.display = 'flex'
        document.getElementById('cifra').style.display = 'none'
        document.querySelector("body").style.backgroundImage = 'url(image/MASTER-IMAGE-64bits-800x450.jpg)'
        
    }
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

function decodificado() {
    let mensagemCodificada = atob(mensagem)

    return mensagemCodificada

}
