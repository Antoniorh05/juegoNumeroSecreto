let numeroSecreto;
let intentos;
let listNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'acertaste el numero en ' + intentos + ((intentos === 1) ? ' vez' : ' veces'))
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
        intentos ++
        limpiarCaja()
    }
    return
}

function limpiarCaja(){
  document.getElementById('valorUsuario').value = ''
}

function generarNumerSecreto() {
let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroGenerado)
console.log(listNumerosSorteados)
if(listNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
}else{


    if(listNumerosSorteados.includes(numeroGenerado)){
        return generarNumerSecreto();
    }else{
        listNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Coloca un numero entre uno y ' + numeroMaximo);
numeroSecreto = generarNumerSecreto()
intentos = 1


}

function reiniciarJuego(){
    limpiarCaja();
   condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales()




