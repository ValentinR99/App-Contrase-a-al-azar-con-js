//Contraseñas al azar
let letras = ["abcdefghijklmnopqrstuvwxyz"];

let numeros = ["0123456789"];

let numLetras = letras + numeros;

const contraAzar = (longitud) => {
    let contra = "";
    for (i = 0; i < longitud; i++) {
        let numAzar = Math.floor(Math.random() * numLetras.length);
        contra += numLetras.charAt(numAzar);
    }
    document.getElementById("resultado").innerHTML= contra ;
};

