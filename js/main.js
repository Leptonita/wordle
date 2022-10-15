'use strict';
let palabra = "";
let numAzar = Math.floor((Math.random() * (palabras.length - 1)) + 1);
palabra = palabras[numAzar];
console.log(palabra);
let intentos;
const totalFilas = 6;
const totalColum = 5;
let actualFila = 0;
let actualColu = 0;
let i = 0;
let k = 0;
let posicionAcertada = 0;
document.getElementById("buttons").style.display = "none";

function empezar() {
    //alert("hola");
    document.getElementById("instrucciones").style.visibility = "hidden";
    document.getElementById("instrucciones").style.display = "none";
    document.getElementById("buttons").style.display = "block";
}

function buscarLetra(letraIn) {
    let encontrado = false;

    let j = 0;
    while (j < palabra.length && !encontrado) {

        if (palabra.includes(letraIn)) {

            if (palabra[i] == letraIn) {
                posicionAcertada++;
                encontrado = true;
                document.getElementById('fila-' + actualFila + '-col-' + actualColu).style.color = "white";
                document.getElementById('fila-' + actualFila + '-col-' + actualColu).style.backgroundColor = "green";
            } else if (palabra[i] != letraIn) {
                document.getElementById('fila-' + actualFila + '-col-' + actualColu).style.color = "blue";
                document.getElementById('fila-' + actualFila + '-col-' + actualColu).style.backgroundColor = "yellow";
            }


        } else {
            document.getElementById('fila-' + actualFila + '-col-' + actualColu).style.color = "white";
            document.getElementById('fila-' + actualFila + '-col-' + actualColu).style.backgroundColor = "black";
        }
        j++;
    }
    return posicionAcertada;
}

function daLetra(letraIn) {
    let mensaje = "";

    if (actualColu < totalColum && actualFila < totalFilas) {}

    const enCelda = document.getElementById('fila-' + actualFila + '-col-' + actualColu); // ejemplo id celdas ("fila-0-col-0")
    enCelda.textContent = letraIn.toUpperCase();

    buscarLetra(letraIn); //funcion para comprobar si la letra está en la palabra secreta   

    if (actualColu == (totalColum - 1) && actualFila <= totalFilas) { //final de fila y aun quedan filas por completar posicionAcertada <= totalColum

        if (posicionAcertada < totalColum) { // si no se ha acertado la palabra
            actualColu = 0;
            i = 0;
            posicionAcertada = 0;
            actualFila++;
            k++;
            if (actualFila == totalFilas) {
                mensaje += '¡Lástima! La palabra era \"' + palabra + '\"';
                document.getElementById('buttons').style.display = "none";
                document.getElementById('instrucciones').style.display = "none";
                document.getElementById('leyenda').style.display = "none";

            }
        } else {
            document.getElementById('buttons').style.display = "none";
            document.getElementById('instrucciones').style.display = "none";
            document.getElementById('leyenda').style.display = "none";

            if (actualFila == 0) {
                mensaje += '¡Genial! Has acertado la palabra a la primera';
            } else if (actualFila ==1) {
                mensaje += '¡Extraordinario! Has acertado la palabra con tan sólo ' + (actualFila + 1) + ' intentos';
            
            } else if (actualFila <= 3) {
                mensaje += '¡Estupendo! Has acertado la palabra en tan sólo ' + (actualFila + 1) + ' intentos';
            } else {
                mensaje += '¡Enhorabuena! Has acertado la palabra en ' + (actualFila + 1) + ' intentos';
            }
        }
    } else {
        i++
        actualColu++

    }
    //console.log(posicionAcertada);
    document.getElementById("mensaje").innerHTML = mensaje;

}