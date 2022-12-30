

tablero= document.querySelectorAll('#tablero > .col-4');

for(let i=0;i<tablero.length;i++)
    tablero[i].addEventListener('click', colocaFicha);