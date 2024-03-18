const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");



// Agrega un evento de teclado al textarea
textArea.addEventListener("keypress", function(event) {
    // Obtiene el carácter ingresado
    var char = String.fromCharCode(event.which || event.keyCode);
    
    // Expresión regular para caracteres permitidos (solo letras y espacios)
    var regex = /^[a-zA-ZñÑ\s]*$/;
    
    // Verifica si el carácter ingresado no coincide con la expresión regular
    if (!regex.test(char) || textArea.value.trim() === '' && event.key === ' ') {
      event.preventDefault();
    }
  });
  

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.style.visibility = "visible";

}


function encriptar(textoEncriptado){
    let matrizLlaves = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase()

    for (let i = 0; i < matrizLlaves.length; i++){
        if(textoEncriptado.includes(matrizLlaves[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1])
        }

    }

    return textoEncriptado;     

}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function desencriptar(textoDesencriptado){
    let matrizLlaves = [["u", "ufat"], ["a","ai"], ["i", "imes"], ["o","ober"], ["e","enter"]];
    textoDesencriptado = textoDesencriptado.toLowerCase()

    for (let i = 0; i < matrizLlaves.length; i++){
        if(textoDesencriptado.includes(matrizLlaves[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0])
        }

    }

    return textoDesencriptado;     

}


    function btnCopiar(){

        writeClipboardText(mensaje.value);
        alert("texto copiado al portapapeles");
    
}


async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

