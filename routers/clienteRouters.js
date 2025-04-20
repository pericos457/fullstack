const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clienteController');

// Solicitud GET para obtener todos los clientes
router.get('/', (req, res) => clientController.getClients(req, res));

// Solicitud GET para obtener un cliente por DNI (en lugar de ID)
router.get('/dni/:dni', (req, res) => clientController.getClientByDni(req, res));  // Aquí cambiamos el parámetro a DNI

// Solicitud POST para agregar un cliente
router.post('/', (req, res) => clientController.createClient(req, res));

// Solicitud PUT para actualizar un cliente por DNI
router.put('/dni/:dni', (req, res) => clientController.updateClient(req, res));  // Aquí cambiamos el parámetro a DNI

// Solicitud DELETE para eliminar un cliente por DNI
router.delete('/dni/:dni', (req, res) => clientController.deleteClient(req, res));  // Aquí cambiamos el parámetro a DNI

module.exports = router;
