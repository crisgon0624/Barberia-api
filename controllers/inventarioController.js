const Inventario = require("../models/Inventario");

// Crear producto
const crearProducto = async (req, res) => {
    try {
        const producto = new Inventario(req.body);
        await producto.save();

        res.status(201).json({
            mensaje: "Producto registrado correctamente",
            producto
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar el producto",
            error: error.message
        });
    }
};

// Obtener todos
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Inventario.find();
        res.json(productos);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener productos",
            error: error.message
        });
    }
};

// Obtener por ID
const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Inventario.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json(producto);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el producto",
            error: error.message
        });
    }
};

// Actualizar
const actualizarProducto = async (req, res) => {
    try {
        const producto = await Inventario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json({
            mensaje: "Producto actualizado correctamente",
            producto
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el producto",
            error: error.message
        });
    }
};

// Eliminar
const eliminarProducto = async (req, res) => {
    try {
        const producto = await Inventario.findByIdAndDelete(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json({
            mensaje: "Producto eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el producto",
            error: error.message
        });
    }
};

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
};