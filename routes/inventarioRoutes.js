const express = require("express");
const router = express.Router();

const {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} = require("../controllers/inventarioController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, crearProducto);
router.get("/", authMiddleware, obtenerProductos);
router.get("/:id", authMiddleware, obtenerProductoPorId);
router.put("/:id", authMiddleware, actualizarProducto);
router.delete("/:id", authMiddleware, eliminarProducto);

module.exports = router;