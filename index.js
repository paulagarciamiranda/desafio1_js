/* PRECIO INICIAL */
precio = Number(400000);

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

/* TOTAL A PAGAR SUMA */
const suma = () => {
  let numero = document.querySelector(".valor-total");
  let contenido = Number(numero.innerHTML);
  contenido = contenido + precio;
  numero.innerHTML = contenido;
  /*  CANTIDAD DE PRODUCTOS SUMA  */
  let cantidad = document.querySelector(".cantidad");
  let resultado = Number(cantidad.innerHTML);
  resultado = resultado + 1;
  cantidad.innerHTML = resultado;
};

/* TOTAL A PAGAR RESTA */
const resta = () => {
  let numero = document.querySelector(".valor-total");
  let contenido = Number(numero.innerHTML);
  if (contenido > 0) {
  contenido = contenido - precio;
  numero.innerHTML = contenido;
  };
  /*  CANTIDAD DE PRODUCTOS RESTA  */
  let cantidad = document.querySelector(".cantidad");
  let resultado = Number(cantidad.innerHTML);
  if (resultado > 0) {
    resultado = resultado - 1;
    cantidad.innerHTML = resultado;
  }
};
