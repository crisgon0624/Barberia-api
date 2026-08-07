const Cliente = require("../models/Cliente");

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find().sort({ createdAt: -1 });
        res.json(clientes);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los clientes"
        });
    }
};

// Crear cliente
const crearCliente = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();

        res.status(201).json({
            mensaje: "Cliente registrado correctamente",
            cliente
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar el cliente"
        });
    }
};

// Obtener un cliente por ID
const obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado"
            });
        }

        res.json(cliente);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el cliente"
        });
    }
};

// Actualizar cliente
const actualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!cliente) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado"
            });
        }

        res.json({
            mensaje: "Cliente actualizado correctamente",
            cliente
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el cliente"
        });
    }
};

// Eliminar cliente
const eliminarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);

        if (!cliente) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado"
            });
        }

        res.json({
            mensaje: "Cliente eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el cliente"
        });
    }
};

module.exports = {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
};