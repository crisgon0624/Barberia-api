const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
    try {
        // obtener el token del encabezado Authrization
        const token = req.header("Authorization");

        // Verificar que exista
        if (!token) {
            return res.status(401).json({
                mensaje: "Acceso denegado. token no proporcionado."

            });
        }

        //Eliminar la palabra Bearer
        const tokenLimpio = token.replace("Bearer ", "");

        // Verificar el token
        const usuario = jwt.verify(tokenLimpio, process.env.JWT_SECRET);

            // Guardar la información del usuario
        req.usuario = usuario;

        // Continuar con la siguiente función
        next();

    } catch (error) {
        return res.status(401).json({
            mensaje: "Token inválido."
        });
    }
};

module.exports = verificarToken;