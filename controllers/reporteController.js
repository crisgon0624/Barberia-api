const Cliente = require("../models/Cliente");
const Servicio = require("../models/Servicio");
const Cita = require("../models/Cita");
const Inventario = require("../models/Inventario");
const Pago = require("../models/Pago");

// Reporte de clientes
const reporteClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al generar el reporte de clientes",
            error: error.message
        });
    }
};

// Reporte de servicios
const reporteServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al generar el reporte de servicios",
            error: error.message
        });
    }
};

// Reporte de citas
const reporteCitas = async (req, res) => {
    try {
        const citas = await Cita.find()
            .populate("cliente")
            .populate("servicio");

        res.json(citas);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al generar el reporte de citas",
            error: error.message
        });
    }
};

// Reporte de inventario
const reporteInventario = async (req, res) => {
    try {
        const inventario = await Inventario.find();
        res.json(inventario);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al generar el reporte de inventario",
            error: error.message
        });
    }
};

// Reporte de pagos
const reportePagos = async (req, res) => {
    try {
        const pagos = await Pago.find()
            .populate("cliente")
            .populate("cita");

        res.json(pagos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al generar el reporte de pagos",
            error: error.message
        });
    }
};

module.exports = {
    reporteClientes,
    reporteServicios,
    reporteCitas,
    reporteInventario,
    reportePagos
};