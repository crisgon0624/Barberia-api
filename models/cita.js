const mongoose = require("mongoose");

const citaSchema = new mongoose.Schema(
{
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },

    servicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Servicio",
        required: true
    },

    fecha: {
        type: Date,
        required: true
    },

    hora: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        enum: ["Pendiente", "Confirmada", "Cancelada", "Finalizada"],
        default: "Pendiente"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Cita", citaSchema);