export default function FormularioProducto({
    datosForm,
    manejarCambio,
    manejarCambioImagen,
    manejarEnvio,
    loading,
    alerta
}) {
    console.log(datosForm);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        gap: '16px'
    };

    return (
        <form style={formStyle} onSubmit={manejarEnvio}>

            <h3>Agregar Nuevo Producto</h3>

            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>

            <div>
                <label>Precio: $</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>

            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>

            <div>
                <label>Imagen:</label>
                <input
                    type="file"
                    onChange={manejarCambioImagen}
                />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Subiendo imagen..." : "Guardar Producto"}
            </button>

            {alerta.visible && (
                <div className={`alert alert-${alerta.tipo}`} role="alert">
                    {alerta.mensaje}
                </div>
            )}

        </form>
    );
}