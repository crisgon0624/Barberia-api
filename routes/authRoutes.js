const express = require("express");
const router = express.Router();

const {
    registrarUsuario,
    loginUsuario
} = require("../controllers/authController");

// Ruta para registrar un usuario
router.post("/register", registrarUsuario);

// Ruta para iniciar sesión
router.post("/login", loginUsuario);

module.exports = router;