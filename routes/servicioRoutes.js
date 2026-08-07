const express = require("express");
const router = express.Router();

const {
    crearServicio,
    obtenerServicios,
    obtenerServicioPorId,
    actualizarServicio,
    eliminarServicio
} = require("../controllers/servicioController");

const authMiddleware = require("../middleware/authMiddleware");

// Crear servicio
router.post("/", authMiddleware, crearServicio);

// Obtener todos los servicios
router.get("/", authMiddleware, obtenerServicios);

// Obtener un servicio por ID
router.get("/:id", authMiddleware, obtenerServicioPorId);

// Actualizar servicio
router.put("/:id", authMiddleware, actualizarServicio);

// Eliminar servicio
router.delete("/:id", authMiddleware, eliminarServicio);

module.exports = router;