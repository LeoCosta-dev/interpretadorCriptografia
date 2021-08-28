/*.charCodeAt() - transforma letra em número da tabela ascii

String.fromCharCode(b) - faz o inverso do de cima

de 97 até 122 são as minusculas
de 65 até 90 maiusculas*/
var mensagem //apenas de a-z
var incremento  //apenas Number


function cifrado(){
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []
    
    for (let i = 0; mensagemArr.length > i; i++){
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <=90 ){
            let teste = ((mensagemArr[i].charCodeAt()) -65 + incremento)%26
            codificadorArr.push(teste+65)
            console.log("cheguei")
        }else if(mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <=122){
            let teste = ((mensagemArr[i].charCodeAt()) -97 + incremento)%26
            codificadorArr.push(teste+97)
            console.log("cheguei")
        }else{
            codificadorArr.push(mensagemArr[i].charCodeAt())
            console.log("cheguei")
        }
    }
    for (let j = 0; codificadorArr.length > j; j++){
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}
function decifrado(){
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []
    
    for (let i = 0; mensagemArr.length > i; i++){
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <=90 ){
            let teste = ((mensagemArr[i].charCodeAt()) -65 - incremento)%26
            codificadorArr.push((teste < 0?teste+26:teste)+65)
            console.log("cheguei")
        }else if(mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <=122){
            let teste = ((mensagemArr[i].charCodeAt()) -97 - incremento)%26
            codificadorArr.push((teste < 0?teste+26:teste)+97)
            console.log("cheguei")
        }else{
            codificadorArr.push(mensagemArr[i].charCodeAt())
            console.log("cheguei")
        }
    }
    for (let j = 0; codificadorArr.length > j; j++){
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}

// motor para utilizar base64

function codificador(){
    let mensagemCodificada = btoa(mensagem)
    
    return mensagemCodificada

}

function decodifica(){
    let mensagemCodificada = atob(mensagem)
    
    return mensagemCodificada

}

//valorConta = resulta>=0?oQueEujaTenho:resulta * (-1)