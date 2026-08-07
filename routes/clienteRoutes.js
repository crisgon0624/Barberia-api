const express = require("express");
const router = express.Router();

const {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
} = require("../controllers/clienteController");

const authMiddleware = require("../middleware/authMiddleware");

// Rutas protegidas
router.post("/", authMiddleware, crearCliente);
router.get("/", authMiddleware, obtenerClientes);
router.get("/:id", authMiddleware, obtenerClientePorId);
router.put("/:id", authMiddleware, actualizarCliente);
router.delete("/:id", authMiddleware, eliminarCliente);

module.exports = router;