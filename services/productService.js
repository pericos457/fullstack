// services/productService.js

const productModel = require('../models/productModel');

class ProductService {

    async getProducts() {
        return await productModel.getAllProducts();
    }

    async getProductById(id) { // corregido nombre
        return await productModel.getProductById(id); // corregido nombre también aquí
    }

    async addProduct(data) { // corregido: data en vez de date
        return await productModel.createProduct(data);
    }

    async modifyProduct(id, data) { // corregido: data en vez de date
        return await productModel.updateProduct(id, data);
    }

    async removeProduct(id) {
        await productModel.deleteProduct(id);
    }
}

// ✅ Esta línea es esencial
module.exports = new ProductService();