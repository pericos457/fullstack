const { Pool } = require('pg');  // Importa la librería de PostgreSQL

class Database {
    constructor() {
        // Asegúrate de que los detalles de conexión sean correctos
        this.pool = new Pool({
            user: 'postgrestienda',
            host: 'localhost',
            database: 'empleados',
            password: 'admin',
            port: 5432,
        });
    }

    // Método para ejecutar consultas SQL
    query(text, params) {
        return this.pool.query(text, params);
    }
}

// Exporta una instancia de la clase Database
module.exports = new Database();
