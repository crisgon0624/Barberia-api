const mongoose = require("mongoose");

const inventarioSchema = new mongoose.Schema(
{
    producto: {
        type: String,
        required: true,
        trim: true
    },

    descripcion: {
        type: String,
        default: ""
    },

    cantidad: {
        type: Number,
        required: true,
        default: 0
    },

    precio: {
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

module.exports = mongoose.model("Inventario", inventarioSchema);