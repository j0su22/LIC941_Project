// Obtener el usuario activo del localStorage
function getUsuarioActivo() {
    return JSON.parse(localStorage.getItem("usuarioActivo"));
}

// Obtener transacciones del usuario activo
function obtenerTransacciones() {
    const usuario = getUsuarioActivo();
    const clave = `transacciones_${usuario.cuenta}`;
    return JSON.parse(localStorage.getItem(clave)) || [];
}

// Guardar transacciones en el localStorage
function guardarTransacciones(lista) {
    const usuario = getUsuarioActivo();
    const clave = `transacciones_${usuario.cuenta}`;
    localStorage.setItem(clave, JSON.stringify(lista));
}

// Agregar una transacción al localStorage
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
