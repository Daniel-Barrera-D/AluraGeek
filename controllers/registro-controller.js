import { productServices } from "../service/product-service.js";

const $formulario = document.querySelector("[data-form]");
console.log($formulario);

$formulario.addEventListener("submit", e => {
    e.preventDefault();
    const $imagenUrl = document.querySelector("[data-imagen]").value;
    const $categoria = document.querySelector("[data-categoria]").value;
    const $nombre = document.querySelector("[data-nombre]").value;
    const $precio = document.querySelector("[data-precio]").value;
    const $descripcion = document.querySelector("[data-descripcion]").value;

    // console.log(`${$imagenUrl} - ${$categoria} - ${$nombre} - ${$precio} - ${$descripcion}`);

    productServices
        .crearProducto($imagenUrl, $categoria, $nombre, $precio, $descripcion)
        .then( (respuesta) => window.location.href = "../html/registro_completado.html")
        .catch( (err) => swal("Error en el registro", `Ha ocurrido un error: ${err}`, "error"))
});