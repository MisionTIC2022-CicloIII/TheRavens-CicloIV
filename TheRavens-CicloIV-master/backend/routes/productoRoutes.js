import express from 'express';

import {
    prueba,
    deleteProductos,
    getProducto,
    getProductos,
    getExistencias,
    createProductos,
    updateProductos

} from '../controllers/productoController.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);

// Rutas Gestión Producto
router.get('/get', getProductos);
router.get('/getexistencias', getExistencias);
router.get('/get/:id', getProducto);
router.post('/create', createProductos);
router.put('/update/:id', updateProductos);
router.delete('/delete/:id', deleteProductos);

export default router;