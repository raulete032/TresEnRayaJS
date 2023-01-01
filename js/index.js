
const moneda={
                1:'mcruz.png',
                2:'mcara.png'
}

var jugar=false;
//true= player1; false=player2;
var turno;
/**
 * Función que dibuja una ficha en el tablero
 */
function colocaFicha(){
    
    let div= this;
    if(jugar){ //se está jugando
        let img= creaNodo("img");
        if(turno){
            img.src='../img/circulo.png';
            img.className='circulo';
        }            
        else{
            img.src='../img/cruz.png';
            img.className='cruz';
        }            
        div.appendChild(img);        
    }
    else{
        document.getElementById('errorLanzaMoneda').innerHTML= "Lanza la moneda para saber quien empieza";
    }
    tituloTurno();

    compruebaGanar();
}



/**
 * Se pulsa el botoón lanzar moneda
 */
var swMoneda=true;
function lanzarMoneda(){
    document.getElementById('errorLanzaMoneda').innerHTML= "";
    let eleccion= eleccionF();

    if(eleccion){
        document.getElementById('btnLanzarMoneda').disabled=true;
        document.getElementById('player1Cara').disabled=true;
        document.getElementById('player1Cruz').disabled=true;
        document.getElementById('player2Cara').disabled=true;
        document.getElementById('player2Cruz').disabled=true;
        let moneda= document.getElementById('moneda');
        moneda.style.animationFillMode= 'forwards';
        moneda.style.animationIterationCount= 'infinite';
    
        let result= Math.round(Math.random());
        lanzamiento(0, result);   
    }
    else{
        document.getElementById('errorLanzaMoneda').innerHTML= "Elige entre cara o cruz";
    }
    
}

/**
 * Función que verifica que se ha lanzado la moneda
 * @returns true o false
 */
function eleccionF(){
    
    let player1= document.getElementsByName("player1");
    let sw=false;
    for(let i=0;i<player1.length;i++){
        if(player1[i].checked)
            sw=true;
    }
    return sw;
}

/**
 * Función que hace girar la moneda
 * @param {*} x -> Número de vueltas que dará la moneda (10)
 * @param {*} solu -> Valor final de la moneda
 */
function lanzamiento(x, solu) {

    let moneda= document.getElementById('moneda');
    if (x < 10) {
        
        if(x%2==0){
            moneda.src='./img/mcara.png';
            moneda.className='mcara';
        }
        else{
            moneda.src='./img/mcruz.png';
            moneda.className='mcruz';
        }  
        setTimeout(() => lanzamiento((x+1), solu), 200);
    }
    else{
        moneda.style.animationFillMode= 'backwards';
        moneda.style.animationIterationCount= 'initial';
        
        if(solu==1){
            moneda.src= './img/mcara.png';
            moneda.className='mcara';
        }
        else{
            moneda.src= './img/mcruz.png';
            moneda.className='mcruz';
        }
        finMoneda();
    }
  }

  /**
   * Función que pone fin a la animación de la moneda
   */
  function finMoneda(){

    let resultado= document.getElementById('moneda').className;
    
    jugar=true;

    if(resultado=='mcara'){ //salió cara
        if(document.getElementById('player1Cara').checked){ //el jugador1 eligió cara
            turno=true;
        }
        else{ //el jugador eligió cruz
            turno=false;
        }
    }
    else if(resultado=='mcruz'){ //salió cruz
        if(document.getElementById('player1Cruz').checked){ //el jugador1 eligió cruz
            turno=true;
        }
        else{ //el jugador eligió cruz
            turno=false;
        }
    }

    tituloTurno();
  }

  /**
   * Función que escribe de quien es el turno
   */
  function tituloTurno(){

    if(turno)
        document.getElementById('turno').innerHTML="Turno del jugador 1";
    else
        document.getElementById('turno').innerHTML="Turno del jugador 2"
  }


  /**
   * Función que cambia el radio button del otro en función del radio
   * elegido
   * @param {*} event 
   */
  function eligeMoneda(event){

    let pulsa= event.target;

    if(pulsa.name=='player1'){
        if(pulsa.id=='player1Cara')
            document.getElementById('player2Cruz').checked=true;
        else if(pulsa.id=='player1Cruz')
            document.getElementById('player2Cara').checked=true;
    }
    else if(pulsa.name='player2'){
        if(pulsa.id=='player2Cara')
            document.getElementById('player1Cruz').checked=true;
        else if(pulsa.id=='player2Cruz')
            document.getElementById('player1Cara').checked=true;
        
    }
  }

  /**
   * Función que comprueba si se ha ganado
   */
  function compruebaGanar(){

    let divsTablero= document.querySelectorAll('#tablero div');

    let ganador=false;

    if(turno){ //es turno del jugador1

        
    }
    else if(!turno){ //es turno dle jugador2




    }
    
    if(!ganador) //no ha ganado nadie
        turno=!turno;
  }

