const Pago = require("../models/Pago");

// Crear pago
const crearPago = async (req, res) => {
    try {
        const pago = new Pago(req.body);
        await pago.save();

        res.status(201).json({
            mensaje: "Pago registrado correctamente",
            pago
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar el pago",
            error: error.message
        });
    }
};

// Obtener pagos
const obtenerPagos = async (req, res) => {
    try {
        const pagos = await Pago.find()
            .populate("cliente")
            .populate("cita");

        res.json(pagos);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener pagos",
            error: error.message
        });
    }
};

// Obtener pago por ID
const obtenerPagoPorId = async (req, res) => {
    try {
        const pago = await Pago.findById(req.params.id);

        if (!pago) {
            return res.status(404).json({
                mensaje: "Pago no encontrado"
            });
        }

        res.json(pago);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el pago",
            error: error.message
        });
    }
};

// Actualizar pago
const actualizarPago = async (req, res) => {
    try {
        const pago = await Pago.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!pago) {
            return res.status(404).json({
                mensaje: "Pago no encontrado"
            });
        }

        res.json({
            mensaje: "Pago actualizado correctamente",
            pago
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el pago",
            error: error.message
        });
    }
};

// Eliminar pago
const eliminarPago = async (req, res) => {
    try {
        const pago = await Pago.findByIdAndDelete(req.params.id);

        if (!pago) {
            return res.status(404).json({
                mensaje: "Pago no encontrado"
            });
        }

        res.json({
            mensaje: "Pago eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el pago",
            error: error.message
        });
    }
};

module.exports = {
    crearPago,
    obtenerPagos,
    obtenerPagoPorId,
    actualizarPago,
    eliminarPago
};