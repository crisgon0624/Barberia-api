const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// REGISTRAR USUARIO

const registrarUsuario = async (req, res) => {
    try {

        const { nombre, correo, password } = req.body;

        // Verificar si el correo ya existe
        const existeUsuario = await Usuario.findOne({ correo });

        if (existeUsuario) {
            return res.status(400).json({
                mensaje: "El correo ya está registrado"
            });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordEncriptado = await bcrypt.hash(password, salt);

        // Crear usuario
        const nuevoUsuario = new Usuario({
            nombre,
            correo,
            password: passwordEncriptado
        });

        // Guardar en MongoDB
        await nuevoUsuario.save();

        res.status(201).json({
            mensaje: "Usuario registrado correctamente"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error en el servidor"
        });

    }
};


// LOGIN DE USUARIO

const loginUsuario = async (req, res) => {

    try {

        const { correo, password } = req.body;

        // Buscar usuario por correo
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        // Comparar contraseña
        const passwordValido = await bcrypt.compare(password, usuario.password);

        if (!passwordValido) {
            return res.status(400).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        // Crear token JWT
        const token = jwt.sign(
            { id: usuario._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            token
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error en el servidor"
        });

    }

};

// Exportar funciones
module.exports = {
    registrarUsuario,
    loginUsuario
};