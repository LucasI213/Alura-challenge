function encriptar() {
    let texto = document.getElementById("texto1").value.toLowerCase();
    let txtCifrado = texto.replace(/e/igm, "enter");
    txtCifrado = txtCifrado.replace(/o/igm, "ober"); 
    txtCifrado = txtCifrado.replace(/i/igm, "imes"); 
    txtCifrado = txtCifrado.replace(/a/igm, "ai"); 
    txtCifrado = txtCifrado.replace(/u/igm, "ufat"); 

    document.getElementById("munieco").style.display = "none";
    document.getElementById("mensajeNoencontrado").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar() {
    let texto = document.getElementById("texto1").value.toLowerCase();
    let txtCifrado = texto.replace(/enter/igm, "e");
    txtCifrado = txtCifrado.replace(/ober/igm, "o"); 
    txtCifrado = txtCifrado.replace(/imes/igm, "i"); 
    txtCifrado = txtCifrado.replace(/ai/igm, "a"); 
    txtCifrado = txtCifrado.replace(/ufat/igm, "u"); 

    document.getElementById("munieco").style.display = "none";
    document.getElementById("mensajeNoencontrado").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}


function copiar () {
    let contenido = document.getElementById("texto2").value;

    navigator.clipboard.writeText(contenido)
      .then(function() {
        alert("Texto copiado al portapapeles");
      })
      .catch(function(error) {
        alert("Error al copiar el texto: ", error);
      });
  }
