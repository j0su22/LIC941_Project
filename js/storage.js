// Obtener todas las transacciones
function obtenerTransacciones() {
    return JSON.parse(localStorage.getItem("transacciones")) || [];
}

// Guardar transacciones
function guardarTransacciones(lista) {
    localStorage.setItem("transacciones", JSON.stringify(lista));
}

// Agregar una nueva transacción
function agregarTransaccion(tipo, monto, descripcion = "") {
    const transaccion = {
        tipo,
        monto: parseFloat(monto),
        descripcion,
        fecha: new Date().toLocaleDateString("es-ES")
    };

    const transacciones = obtenerTransacciones();
    transacciones.push(transaccion);
    guardarTransacciones(transacciones);
}