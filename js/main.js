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


function palabraOculta(palabra) {
    let primera = palabra[0];
    let segunda = palabra[1];
    let tercera = palabra[2];
    let cuarta = palabra[3];
    let quinta = palabra[4];
}

function crearCeldas() {}

function buscarLetra(letraIn) {
    let encontrado = false;

    let j = 0;
    while (j < palabra.length && !encontrado) {
        //console.log(i, j);
        if (palabra.includes(letraIn)) {
            //console.log("palabra.includes(letraIn)", palabra.includes(letraIn));
            if (palabra[i] == letraIn) {
                //console.log("palabreja: ", palabra[i - (intentos * 5)]);
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

    const enCelda = document.getElementById('fila-' + actualFila + '-col-' + actualColu);     // ejemplo id celdas ("fila-0-col-0")
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
                mensaje += 'se ha acabado, hasta la próxima. La palabra era ' + palabra;
                document.getElementById('buttons').style.display = "none";            
                //document.getElementsByClassName('btnLetras').disabled = true;
                
            }
        } else {
            //document.getElementsByClassName('btnLetras').disabled = true;

            document.getElementById('buttons').style.display = "none";    
            mensaje += 'Has acertado la palabra';            
        }

       

    } else {
        i++
        actualColu++
       
    }
    //console.log(posicionAcertada);
    document.getElementById("mensaje").innerHTML = mensaje;

}

/*
NOTA : deshabilitar los botones al acabar tanto si acierta como sino. el
*/ 