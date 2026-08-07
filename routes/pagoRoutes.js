const express = require("express");
const router = express.Router();

const {
    crearPago,
    obtenerPagos,
    obtenerPagoPorId,
    actualizarPago,
    eliminarPago
} = require("../controllers/pagoController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, crearPago);
router.get("/", authMiddleware, obtenerPagos);
router.get("/:id", authMiddleware, obtenerPagoPorId);
router.put("/:id", authMiddleware, actualizarPago);
router.delete("/:id", authMiddleware, eliminarPago);

module.exports = router;