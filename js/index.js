
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

    document.getElementById('btnLanzarMoneda').disabled=true;
    let vueltas= Math.round(Math.random()*10)+10;
    
    //Cada 200 milisegundos (0.2 segundos)
    let giros= setInterval(() => {

        let moneda= document.getElementById('moneda');
        if(swMoneda){
            moneda.src='./img/mcara.png';
            moneda.style.transform='rotateX(90deg)';
            moneda.className='mcara';
        }
        else{
            moneda.src='./img/mcruz.png';
            moneda.style.transform='rotateX(90deg)';
            moneda.className='mcruz';
        }
        swMoneda=!swMoneda;
        
    }, 2000);

    setTimeout(() => {
        clearInterval(giros);
    }, 10000);
    
    if(vueltas%2==0){

    }    
    else{

    }
}



/**
 * Función que cambia la imagen de la moneda
 */
function gira(){

    
}