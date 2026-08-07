const express = require("express");
const router = express.Router();

const {
    crearCita,
    obtenerCitas,
    obtenerCitaPorId,
    actualizarCita,
    eliminarCita
} = require("../controllers/citaController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, crearCita);
router.get("/", authMiddleware, obtenerCitas);
router.get("/:id", authMiddleware, obtenerCitaPorId);
router.put("/:id", authMiddleware, actualizarCita);
router.delete("/:id", authMiddleware, eliminarCita);

module.exports = router;