const db = require('./bd');  // Importa la instancia de la base de datos

(async () => {
    try {
        console.log('Iniciando la conexión a la base de datos...');
        // Realiza la consulta para obtener la fecha y hora actual
        const result = await db.query('select * from usuario');
        console.log('Conexión exitosa a la fecha y hora actual: ', result.rows[0]);
    } catch (error) {
        // Si ocurre un error, lo captura y muestra
        console.error('Error de conexión: ', error);
    }
})();
