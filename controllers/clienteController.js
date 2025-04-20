const { deleteClient } = require('../models/clienteModel');  
const clientService = require('../services/clienteService');  

class ClientController {
    async getClients(req, res) {
      try {
        const clients = await clientService.getClients();
        res.json(clients);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los clientes' });
      }
    }
  
    async getClientByDni(req, res) {
      try {
        const { dni } = req.params;
        const client = await clientService.getClientByDni(dni);
        if (!client) {
          return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(client);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al buscar cliente por DNI' });
      }
    }
  
    async createClient(req, res) {
      try {
        const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
        const newClient = await clientService.addClient({ dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento });
        res.status(201).json(newClient);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear cliente' });
      }
    }
  
    async updateClient(req, res) {
      try {
        const { dni } = req.params;
        const { nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
        const updatedClient = await clientService.updateClient(dni, { nombre, apellido_paterno, apellido_materno, fecha_nacimiento });
        res.json(updatedClient);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar cliente' });
      }
    }
  
    async deleteClient(req, res) {
      try {
        const { dni } = req.params;
        await clientService.deleteClient(dni);
        res.sendStatus(204);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar cliente' });
      }
    }
  }
  
  module.exports = new ClientController();