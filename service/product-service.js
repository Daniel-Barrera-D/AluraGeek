const listaProductos = () => {
    return fetch("http://localhost:3000/producto").then( respuesta => respuesta.json());
}

const crearProducto = (imagenUrl, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ imagenUrl, categoria, nombre, precio, descripcion, id: uuid.v4().slice(0,8) })
    });
}

const eliminarProducto = (id) => {
    console.log(`Eliminar ${id}`);
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    });
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`)
        .then( respuesta => respuesta.json())
}

const actualizarProducto = (imagenUrl, categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ imagenUrl, categoria, nombre, precio, descripcion })
    })
    .then( respuesta => respuesta)
    .catch( err => alert(err) )
}

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}