const mongoose = require("mongoose");
require("dotenv").config();

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongo conectado correctamente");
    } catch (error) {
        console.error("Error al conectar con Mongo DB:", error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;