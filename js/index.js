
var puntosPlayer1=0;
var puntosPlayer2=0;

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
            img.src='./img/circulo.png';
            img.className='circulo';
        }            
        else{
            img.src='./img/cruz.png';
            img.className='cruz';
        }
        if(div.childNodes.length==0){
            div.appendChild(img);            
            let fin= compruebaGanar(div);
            tituloTurno();
            if(fin){
                reiniciaJugo();
            }
                
        }
                    
    }
    else{
        document.getElementById('errorLanzaMoneda').innerHTML= "Lanza la moneda para saber quien empieza";
    }
    
}



/**
 * Se pulsa el botoón lanzar moneda
 */
var swMoneda=true;
function lanzarMoneda(){
    document.getElementById('errorLanzaMoneda').innerHTML= "";
    // document.getElementById('turno').innerHTML="";
    let eleccion= eleccionF();

    if(eleccion){
        borraFichas();
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
  function compruebaGanar(div){

    let id= div.id;

    let comp1;
    let comp2;
    let comp3;
    let ganador=false;
    switch(id){
        case "1-1": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    comp3= compruebaDiagonalPrincipal(id);
                    if(comp1 || comp2 || comp3)
                        ganador= true;
            break;
        case "1-2": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    if(comp1 || comp2)
                        ganador= true;
            break;
        case "1-3": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    comp3= compruebaDiagonalSecundaria(id);
                    if(comp1 || comp2 || comp3)
                        ganador=true;
            break;
        case "2-1": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    if(comp1 || comp2)
                        ganador= true;
            break;
        case "2-2": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    if(comp1 || comp2)
                        ganador= true;
            break;
        case "2-3": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    if(comp1 || comp2)
                        ganador= true;
            break;
        case "3-1": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    comp3= compruebaDiagonalSecundaria(id);
                    if(comp1 || comp2 || comp3)
                        ganador= true;
            break;
        case "3-2": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    if(comp1 || comp2)
                        ganador= true;
            break;
        case "3-3": comp1= compruebaFila(id);
                    comp2= compruebaColumna(id);
                    comp3= compruebaDiagonalPrincipal(id);
                    if(comp1 || comp2 || comp3)
                        ganador= true;
            break;
    }
    
    if(!ganador) //no ha ganado nadie
        turno=!turno;
    
    return ganador;
  }


/**
 * Función que devuelve un array con las coordenadas del cuadrado pulsado
 * @param {*} id -> id del div pulsado
 * @returns array con las coordenadas (fila-columna)
 */
function coordenadasF(id){
    return id.split("-");
}




/**
 * Función que comprueba si en esa línea se hace 3 en raya
 * @param {*} id 
 * @returns 
 */
function compruebaFila(id){

    let jugador= turno?'circulo':'cruz';

    //Me coloco en la primera celda de esa fila
    let coor= coordenadasF(id);
    let fila= coor[0];
    let sw=true;
    let tres=0;
    for(let i=1;i<=3 && sw;i++){
        let img= document.getElementById(fila+"-"+i).childNodes[0];
        if(img!=undefined){ //hay una imagen
            let clase= img.className;
            if(clase==jugador)
                tres++;
            else
                sw=false;
        }
        else 
            sw=false;
    }
    return tres===3;
}

/**
 * Función que comprueba si en esa columna se hace 3 en raya
 * @param {*} id 
 * @returns 
 */
function compruebaColumna(id){

    let jugador= turno?'circulo':'cruz';
    
    //Me coloco en la primera celda de esa col
    let coor= coordenadasF(id);
    let col= coor[1];
    let sw=true;
    let tres=0;
    for(let i=1;i<=3 && sw;i++){
        let img= document.getElementById(i+"-"+col).childNodes[0];
        if(img!=undefined){ //hay una imagen
            let clase= img.className;
            if(clase==jugador)
                tres++;
            else
                sw=false;
        }
        else 
            sw=false;
    }
    return tres===3;
}

/**
 * Función que comprueba si se hace línea en la diagonal principal
 * @param {*} id 
 * @returns 
 */
function compruebaDiagonalPrincipal(id){

    let jugador= turno?'circulo':'cruz';
    let sw=true;
    let tres=0;
    for(let i=1;i<=3 && sw;i++){
        let img= document.getElementById(i+"-"+i).childNodes[0];
        if(img!=undefined){
            let clase= img.className;
            if(clase==jugador)
                tres++;
            else
                sw=false;
        }
        else 
            sw=false;
    }

    return tres===3;
}


function compruebaDiagonalSecundaria(id){

    let jugador= turno?'circulo':'cruz';
    let sw=true;
    let tres=0;
    let j=3;
    for(let i=1;i<=3 && sw;i++){
        let img= document.getElementById(i+"-"+j).childNodes[0];
        if(img!=undefined){
            let clase= img.className;
            if(clase==jugador){
                tres++;
                j--;
            }
            else
                sw=false;
        }
        else 
            sw=false;
    }
    return tres===3;
}

function reiniciaJugo(){

    if(turno){
        puntosPlayer1= puntosPlayer1+1;
        document.getElementById('puntos1').innerHTML= puntosPlayer1;
    }
    else{
        puntosPlayer2= puntosPlayer2+1;
        document.getElementById('puntos2').innerHTML= puntosPlayer2;
    }
        

    document.getElementById('btnLanzarMoneda').disabled=false;
    document.getElementById('player1Cara').disabled=false;
    document.getElementById('player1Cruz').disabled=false;
    document.getElementById('player2Cara').disabled=false;
    document.getElementById('player2Cruz').disabled=false;

    document.getElementById('player1Cara').checked=false;
    document.getElementById('player2Cara').checked=false;
    document.getElementById('player1Cruz').checked=false;
    document.getElementById('player2Cruz').checked=false;

    let jugador= turno?'Jugador1':'Jugador2';
    document.getElementById('turno').innerHTML= "Ha ganado el "  + jugador;
}

/**
 * Función que quita la fichas
 */
function borraFichas(){
    let circulos= document.getElementsByClassName('circulo');
    let cruces= document.getElementsByClassName('cruz');

    while(circulos.length!=0)
        circulos[0].remove();

    while(cruces.length!=0)
        cruces[0].remove();
}