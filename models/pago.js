const mongoose = require("mongoose");

const pagoSchema = new mongoose.Schema(
{
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },

    cita: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cita",
        required: true
    },

    valor: {
        type: Number,
        required: true
    },

    metodoPago: {
        type: String,
        enum: ["Efectivo", "Nequi", "Daviplata", "Tarjeta"],
        required: true
    },

    estado: {
        type: String,
        enum: ["Pendiente", "Pagado"],
        default: "Pendiente"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Pago", pagoSchema);