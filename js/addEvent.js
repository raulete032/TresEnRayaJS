

tablero= document.querySelectorAll('#tablero > .col-4');

for(let i=0;i<tablero.length;i++)
    tablero[i].addEventListener('click', colocaFicha);

document.getElementById('btnLanzarMoneda').addEventListener('click', lanzarMoneda);

document.getElementsByName("player1")[0].addEventListener('change', eligeMoneda);
document.getElementsByName("player1")[1].addEventListener('change', eligeMoneda);
document.getElementsByName("player2")[0].addEventListener('change', eligeMoneda);
document.getElementsByName("player2")[1].addEventListener('change', eligeMoneda);
