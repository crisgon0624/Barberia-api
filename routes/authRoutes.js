const express = require("express");
const router = express.Router();

const {
    registrarUsuario,
    loginUsuario
} = require("../controllers/authController");

const verificarToken = require("../middleware/authMiddleware");

// Ruta para registrar un usuario
router.post("/register", registrarUsuario);

// Ruta para iniciar sesión
router.post("/login", loginUsuario);

// Ruta protegida de prueba
router.get("/perfil", verificarToken, (req, res) => {
    res.json({
        mensaje: "Acceso autorizado.",
        usuario: req.usuario
    });
});

module.exports = router;