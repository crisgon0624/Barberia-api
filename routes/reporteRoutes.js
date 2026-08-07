const express = require("express");
const router = express.Router();

const {
    reporteClientes,
    reporteServicios,
    reporteCitas,
    reporteInventario,
    reportePagos
} = require("../controllers/reporteController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/clientes", authMiddleware, reporteClientes);
router.get("/servicios", authMiddleware, reporteServicios);
router.get("/citas", authMiddleware, reporteCitas);
router.get("/inventario", authMiddleware, reporteInventario);
router.get("/pagos", authMiddleware, reportePagos);

module.exports = router;