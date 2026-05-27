import { useState } from "react";
import FormularioProducto from "../Formularios/FormularioProducto";

export default function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        precio: "",
        stock: ""
    });

    const [imagenFile, setImagenFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [alerta, setAlerta] = useState({
        visible: false,
        mensaje: "",
        tipo: ""
    });

    const mostrarAlerta = (mensaje, tipo) => {
        setAlerta({
            visible: true,
            mensaje,
            tipo
        });

        setTimeout(() => {
            setAlerta({
                visible: false,
                mensaje: "",
                tipo: ""
            });
        }, 3000);
    };

    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        });
    };

    const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0]);
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        setLoading(true);

        if (!imagenFile) {
            mostrarAlerta("Por favor, selecciona una imagen para el producto", "danger");
            setLoading(false);
            return;
        }

        const apiKey = "734a616111414fa085ea0984dc3d2568";
        const formData = new FormData();
        formData.append("image", imagenFile);

        try {
            const respuestaImgbb = await fetch(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: "POST",
                    body: formData
                }
            );

            const datosImgbb = await respuestaImgbb.json();

            if (datosImgbb.success) {
                const productoCompleto = {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                };

                console.log(productoCompleto);

                mostrarAlerta("Producto cargado correctamente", "success");
            } else {
                throw new Error("Error en la subida de imagen");
            }
        } catch (error) {
            console.log("error", error )
            mostrarAlerta("Error al subir la imagen", "danger");
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarCambioImagen={manejarCambioImagen}
            manejarEnvio={manejarEnvio}
            loading={loading}
            alerta={alerta}
        />
    );
}