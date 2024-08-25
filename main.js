/*Código que simula el Inventario de una tienda y permite calcular el total a pagar de un cliente*/




function inventario() {
  for (i = 1; i <= 5; i++) {
    let cantidadInicial = parseInt(
      document.getElementById("producto" + i).textContent
    );

    let agregar = parseInt(document.getElementById("agregar" + i).value);

    let restar = parseInt(document.getElementById("restar" + i).value);

    let cantidadFinal = cantidadInicial + agregar - restar;

    document.getElementById("cantidadF" + i).textContent = cantidadFinal;
  }
}

function pagar() {
  let pagarT = [];

  for (i = 1; i <= 5; i++) {
    pagarT[i - 1] =
      parseInt(document.getElementById("precio" + i).textContent) *
      parseInt(document.getElementById("restar" + i).value);
  }

  const PagoF = pagarT.reduce(
    (acumulador, cantidad) => acumulador + cantidad,
    0
  );

  document.getElementById("montaPagar").innerText =
    "El total a pagar es  " + PagoF;
}

//Cantidad de artículos que no están en inventario guardados en localStorage

localStorage.setItem("articulos", 34);

function articulosdemas() {
  const valor = localStorage.getItem("articulos");

  document.getElementById("textoFuera").textContent =
    "La cantidad total de artículos que no están en inventario son  " + valor;
}

//Uso de JSON para guardar un producto de inventario sin especificar

const inventariodesconocido = {
  nombre: "desconocido 1",

  cantidad: 25,
};

const articuloDesconocidos = JSON.stringify(inventariodesconocido);

localStor;
