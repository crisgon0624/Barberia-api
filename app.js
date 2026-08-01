const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

const conectarDB = require("./config/database");

//conectar a mongoDB
const app = express();
conectarDB();

app.use(cors());

app.use(express.json());


//Rutas
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API REST de Barbería.NET"

    });
});

module.exports = app; 