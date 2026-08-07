const mongoose = require("mongoose");

const reporteSchema = new mongoose.Schema(
{
    tipo: {
        type: String,
        required: true,
        enum: [
            "Clientes",
            "Servicios",
            "Citas",
            "Inventario",
            "Pagos"
        ]
    },

    fechaGeneracion: {
        type: Date,
        default: Date.now
    },

    descripcion: {
        type: String,
        default: ""
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Reporte", reporteSchema);