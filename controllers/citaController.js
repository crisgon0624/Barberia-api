const Cita = require("../models/Cita");

// Crear cita
const crearCita = async (req, res) => {
    try {
        const cita = new Cita(req.body);
        await cita.save();

        res.status(201).json({
            mensaje: "Cita creada correctamente",
            cita
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear la cita",
            error: error.message
        });
    }
};

// Obtener todas las citas
const obtenerCitas = async (req, res) => {
    try {

        const citas = await Cita.find()
            .populate("cliente")
            .populate("servicio");

        res.json(citas);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener las citas",
            error: error.message
        });
    }
};

// Obtener cita por ID
const obtenerCitaPorId = async (req, res) => {
    try {

        const cita = await Cita.findById(req.params.id)
            .populate("cliente")
            .populate("servicio");

        if (!cita) {
            return res.status(404).json({
                mensaje: "Cita no encontrada"
            });
        }

        res.json(cita);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener la cita",
            error: error.message
        });
    }
};

// Actualizar cita
const actualizarCita = async (req, res) => {
    try {

        const cita = await Cita.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!cita) {
            return res.status(404).json({
                mensaje: "Cita no encontrada"
            });
        }

        res.json({
            mensaje: "Cita actualizada correctamente",
            cita
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar la cita",
            error: error.message
        });
    }
};

// Eliminar cita
const eliminarCita = async (req, res) => {
    try {

        const cita = await Cita.findByIdAndDelete(req.params.id);

        if (!cita) {
            return res.status(404).json({
                mensaje: "Cita no encontrada"
            });
        }

        res.json({
            mensaje: "Cita eliminada correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar la cita",
            error: error.message
        });
    }
};

module.exports = {
    crearCita,
    obtenerCitas,
    obtenerCitaPorId,
    actualizarCita,
    eliminarCita
};