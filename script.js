const textArea = document.querySelector(".text-area");
const resultado = document.querySelector(".resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

function encriptar(){
    var mensaje = textArea.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    resultado.value = mensajeEncriptado;
    textArea.value = "";
}

function desencriptar(){
    var mensajeEncriptado = textArea.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    resultado.value = mensaje;
    textArea.value = "";
}

function copiar(){
    var mensajeEncriptado = resultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    resultado.value = "";
    
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;