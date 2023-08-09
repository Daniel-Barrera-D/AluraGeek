import { productServices } from "../service/product-service.js";

const $formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null) {
        alert("Error el id es null");
    }

    const $imagen = document.querySelector("[data-imagen]");
    const $categoria = document.querySelector("[data-categoria]");
    const $nombre = document.querySelector("[data-nombre]");
    const $precio = document.querySelector("[data-precio]");
    const $descripcion = document.querySelector("[data-descripcion]");

    try {
        const producto = await productServices.detalleProducto(id);
        if(producto.imagenUrl && producto.categoria && producto.nombre && producto.precio && producto.descripcion) {
            $imagen.value = producto.imagenUrl;
            $categoria.value = producto.categoria;
            $nombre.value = producto.nombre;
            $precio.value = producto.precio;
            $descripcion.value = producto.descripcion;
        }else {
            throw new Error();
        }
    } catch (error) {
        alert("Error");
    }
}

obtenerInformacion();

$formulario.addEventListener("submit", e => {
    e.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const $imagen = document.querySelector("[data-imagen]").value;
    const $categoria = document.querySelector("[data-categoria]").value;
    const $nombre = document.querySelector("[data-nombre]").value;
    const $precio = document.querySelector("[data-precio]").value;
    const $descripcion = document.querySelector("[data-descripcion]").value;

    // console.log(`${$imagen} - ${$categoria} - ${$nombre} - ${$precio} - ${$descripcion}`);

    productServices.actualizarProducto($imagen, $categoria, $nombre, $precio, $descripcion, id)
        .then(() => {
            window.location.href = "../html/editar_completado.html";
        })
})