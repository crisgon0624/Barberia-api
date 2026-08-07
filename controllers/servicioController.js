const Servicio = require("../models/Servicio");

// Crear servicio
const crearServicio = async (req, res) => {
    try {
        const servicio = new Servicio(req.body);
        await servicio.save();

        res.status(201).json({
            mensaje: "Servicio registrado correctamente",
            servicio
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar el servicio",
            error: error.message
        });
    }
};

// Obtener todos los servicios
const obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los servicios",
            error: error.message
        });
    }
};

// Obtener un servicio por ID
const obtenerServicioPorId = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);

        if (!servicio) {
            return res.status(404).json({
                mensaje: "Servicio no encontrado"
            });
        }

        res.json(servicio);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el servicio",
            error: error.message
        });
    }
};

// Actualizar servicio
const actualizarServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!servicio) {
            return res.status(404).json({
                mensaje: "Servicio no encontrado"
            });
        }

        res.json({
            mensaje: "Servicio actualizado correctamente",
            servicio
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el servicio",
            error: error.message
        });
    }
};

// Eliminar servicio
const eliminarServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndDelete(req.params.id);

        if (!servicio) {
            return res.status(404).json({
                mensaje: "Servicio no encontrado"
            });
        }

        res.json({
            mensaje: "Servicio eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el servicio",
            error: error.message
        });
    }
};

module.exports = {
    crearServicio,
    obtenerServicios,
    obtenerServicioPorId,
    actualizarServicio,
    eliminarServicio
};