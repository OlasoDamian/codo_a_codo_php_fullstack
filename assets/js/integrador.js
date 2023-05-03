function calcularPrecioFinal(){
    let cantEnt=document.getElementById("cantEntradas").value;
    let desc=document.getElementById("porcDescuento").value;
    let descTotal=(cantEnt*1000)*desc/100;
    let precioFin=(cantEnt*1000)-descTotal;
    document.getElementById("precioFinal").value=precioFin;
}