
import Venta from '../models/Venta.js'
import Producto from '../models/Producto.js';

var acumulator = 0;

const getProducto =  async (id, cantidad) =>{
    const producto = await Producto.findById(id);
   
    if(producto.stock === 0){
        console.log(`No hay stock del Producto ${producto.nombre}`);
    }else{
        if((producto.stock - cantidad) < 0){
            console.log(`La cantidad solicitada no la hay ${producto.stock}`);
        }else{
            producto.stock = producto.stock - cantidad;
            console.log(`Venta registrada del  ${producto.nombre} - cantidad ${cantidad}`);
            await producto.save();
        }
    }
    
};

const gettotal= async (subtotal) => {
    acumulator = acumulator + subtotal;
}


const prueba = (req, res) => {
    res.send({
        msg: "en esta ruta controlarmos las peticiones al modelo venta"
    })
};

const createVentas = async (req, res) => {
    try {
        const venta = new Venta(req.body);


        venta.articulos.forEach(element => {
            getProducto(element.inf._id, element.cantidad);
           
            element.subtotal = element.cantidad * element.inf.precio ;
            gettotal(element.subtotal)
        });

        venta.total = acumulator;
        const ventaGuardado = await venta.save();


        //generar proceso para actualizar stock producto 

        res.json(ventaGuardado);
    } catch (error) {
        console.error(error.message);
    }
};
const getVenta = async (req, res) => {
    try {
        const OneVenta = await Venta.findById(req.params.id); if (!OneVenta) {
            return res.sendStatus(404);
        } else {
            return res.json(OneVenta);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getVentas = async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.send(ventas);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

const updateVentas = async (req, res) => {};

export {
    prueba,
    createVentas,
    getVenta,
    getVentas,
    updateVentas,
    
};