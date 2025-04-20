const db = require('../config/bd');

class ProductModel {
    // Función para obtener todos los registros de la tabla productos
    async getAllProducts() {
        const result = await db.query('SELECT * FROM productos');
        return result.rows;
    }

    // Función para obtener un registro por ID 
    async getProductById(id) {
        const result = await db.query('SELECT * FROM productos WHERE id = $1', [id]);
        return result.rows[0]; // Retorna el primer producto (único por ID)
    }

    // Función para crear un nuevo registro
    async createProduct({ nombre, precio, descripcion }) {
        const result = await db.query(
            'INSERT INTO productos (nombre, precio, descripcion) VALUES ($1, $2, $3) RETURNING *',
            [nombre, precio, descripcion]
        );
        return result.rows[0]; // Retorna el producto creado
    }

    // Función para actualizar el registro
    async updateProduct(id, { nombre, precio, descripcion }) {
        const result = await db.query(
            'UPDATE productos SET nombre = $1, precio = $2, descripcion = $3 WHERE id = $4 RETURNING *',
            [nombre, precio, descripcion, id]
        );
        return result.rows[0]; // Retorna el producto actualizado
    }

    // Función para eliminar registro
    async deleteProduct(id) {
        await db.query('DELETE FROM productos WHERE id = $1', [id]);
    }
}

module.exports = new ProductModel();