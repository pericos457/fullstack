const clientModel = require('../models/clienteModel');  // Cambia a clientModel

class ClientService {
    async getClients() {
      return await clientModel.getAllClients();
    }
  
    async getClientByDni(dni) {
      return await clientModel.getClientByDni(dni);
    }
  
    async addClient(data) {
      return await clientModel.createClient(data);
    }
  
    async updateClient(dni, data) {
      return await clientModel.updateClient(dni, data);
    }
  
    async deleteClient(dni) {
      await clientModel.deleteClient(dni);
    }
  }
  
  module.exports = new ClientService();