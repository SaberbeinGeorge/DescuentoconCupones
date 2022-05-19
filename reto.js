
var  cuponesArray = ["finDeSemana", "finDeMes", "fiestasPatrias", "navidad"];

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function escojerAlAsar() {
    const text = document.getElementById("asar-cupon");
    const mostrarCupo = cuponesArray[aleatorio(0, 3)];
    text.innerHTML = "El nombre de su cupo es <strong>" + mostrarCupo  + "</strong> puede usarlo para obtener descuentos en sus compras"
}

function operacionDescuento(precio, cupon){
    const porcentajeDescuento = 100 - cupon;
    const descuentoTotal = precio * porcentajeDescuento/100;
    return descuentoTotal;
}

function precioConDescuento() {
    const cupones = document.getElementById("cupon").value;
    
    const precio = Number(document.getElementById("price").value);
    console.log(precio);
    
    const texto = document.getElementById("descuento-cupon");
    let descuento = 0;
    switch(cupones) {
        case "finDeSemana":
          descuento = 15;
        break;
        case "finDeMes":
          descuento = 30;
        break;
        case "fiestasPatrias":
          descuento = 25;
        break;
        case "navidad":
          descuento = 35;
        break;
    }
    const totalDescuentoConCupon = operacionDescuento(precio, descuento);
    texto.innerHTML = `El porcentaje de descuento de su cupo es: ${descuento}% y pagara por su producto un total de: \$${totalDescuentoConCupon}`;
    
}