let NumeroSecreto=0;
let intentos=0;
let ListaNumeroSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return
}   

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    //console.log(typeof(numeroDeUsuario));//retorna q tipo es
   
    console.log(intentos);
    console.log(NumeroSecreto);
    if (numeroDeUsuario===NumeroSecreto){
        asignarTextoElemento ("p",`Acertaste el número en ${intentos} ${(intentos===1) ? "vez":"veces"}`)
        //? if ; colocar si es verdad :(de lo contrario)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        if (numeroDeUsuario>NumeroSecreto){
         asignarTextoElemento ("p","El numero secreto es menor")  
        }else{
            asignarTextoElemento ("p","El numero secreto es mayor")
        }
        intentos++;
        limpiarCaja()
    }
    return
} 

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}

function generarNumeroSecreto(params) {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;   
    console.log(numeroGenerado);
    console.log(ListaNumeroSorteados);
    //si ya sorteamos todo los numeros
    if(ListaNumeroSorteados.length==numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles")

    }else{

    
        //si el numero generado esta incluido en la lista
        if (ListaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }        
            else {
                ListaNumeroSorteados.push(numeroGenerado);
                return numeroGenerado
            }
    }
}


function condicionesIniciales() {
    asignarTextoElemento("h1","\n \n \n \n  Adivina el numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto=generarNumeroSecreto();
    intentos=1;
    
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //condiciones iniciales
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();   
    //desabilitar el boton de "nuevo juego"
   document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();