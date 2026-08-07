const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema(
{
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    descripcion: {
        type: String,
        default: ""
    },

    precio: {
        type: Number,
        required: true
    },

    duracion: {
        type: Number,
        required: true
    },

    estado: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Servicio", servicioSchema);