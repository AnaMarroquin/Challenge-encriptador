function encriptar(){
    let texto = document.getElementById("texto").value;

    let textoCifrado =texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat"); 
    
    if (document.getElementById("texto").value.length != 0){

        document.getElementById("muñeco").style.display = "none";
        document.getElementById("tituloMensaje").style.display = "none";
        document.getElementById("mensaje").innerHTML = textoCifrado;
        document.getElementById("Copiar").style.display = "inherit";
    } else{
        alert("Debes poner un mensaje!");
    }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    
    let textoCifrado =texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u"); 
    
    if (document.getElementById("texto").value.length != 0){

        document.getElementById("muñeco").style.display = "none";
        document.getElementById("tituloMensaje").style.display = "none";
        document.getElementById("mensaje").innerHTML = textoCifrado;
        document.getElementById("Copiar").style.display = "inherit";
    } else{
        alert("Debes poner un mensaje!");
    }
}
function Copiar(){
    let contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("Guardado en el portapales!!");
}