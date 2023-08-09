import { productServices } from "../service/product-service.js";

const crearNuevoProducto = (imagenUrl, nombre, precio, id) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    const contenido = `
    
        <img src="${imagenUrl}" alt="taza">
        <h3 class="producto__titulo">${nombre}</h3>
        <h4 class="producto__precio">$${precio}</h4>
        <h4 href="#" class="producto__id" data-id>#${id}</h4>
        <span class="span">
            <a class="producto__eliminar" id=${id}" data-eliminar><img class="accion__img" src="/assets/img/eliminar-icono.png" alt="eliminar-icono"></a>
            <a class="producto__editar" href="../html/actualizar-producto.html?id=${id}"><img class="accion__img" src="/assets/img/editar-icono.png" alt="editar-icono"></a>
        </span>
    
    `

    div.innerHTML = contenido;

    const $eliminar = div.querySelector('[data-eliminar]');
    $eliminar.addEventListener("click", () => {
        productServices.eliminarProducto(id)
            .then( respuesta => console.log(respuesta) )
            .catch( err => alert("Ocurrió un error: ", err))
    });

    return div;
}

const $seccion = document.querySelector("[data-productos]");

productServices.listaProductos().then((data) => {
    data.forEach(( {imagenUrl, nombre, precio, id }) => {
        const nuevoDiv = crearNuevoProducto(imagenUrl, nombre, precio, id);
        // $seccion.insertAdjacentHTML("beforeend", nuevoDiv)
        $seccion.appendChild(nuevoDiv);
    });
}).catch((error) => {
    console.log("Ocurrió un error" + error);
});

