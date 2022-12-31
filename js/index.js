
const moneda={
                1:'mcruz.png',
                2:'mcara.png'
}



function colocaFicha(){

    let div= this;

    let img= creaNodo("img");
        img.src='../img/circulo.png';

    div.appendChild(img);

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


function eleccionF(){
    
    





}


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
        
        if(solu==1)
            moneda.src= './img/mcara.png';
        else
            moneda.src= './img/mcruz.png';

        finMoneda();
    }
  }


  function finMoneda(){

    let moneda= document.getElementById('moneda');
        moneda


  }




/**
 * Función que cambia la imagen de la moneda
 */
function gira(){

    
}