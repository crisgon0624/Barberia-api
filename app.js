const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const servicioRoutes = require("./routes/servicioRoutes");
const citaRoutes = require("./routes/citaRoutes");
const inventarioRoutes = require("./routes/inventarioRoutes");
const pagoRoutes = require("./routes/pagoRoutes");
const reporteRoutes = require("./routes/reporteRoutes");

const conectarDB = require("./config/database");

//conectar a mongoDB
const app = express();
conectarDB();

app.use(cors());

app.use(express.json());


//Rutas
app.use("/api/auth", authRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/servicios", servicioRoutes);
app.use("/api/citas", citaRoutes);
app.use("/api/inventario", inventarioRoutes);
app.use("/api/pagos", pagoRoutes);
app.use("/api/reportes", reporteRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API REST de Barbería.NET"

    });
});

module.exports = app; 