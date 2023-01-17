const { Router } = require("express");
//Provvedor
const { 
    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor,
    getProveedorByName,
    deleteFisicoProveedor,
    getProveedorActivos,
    getProveedorInactivo
} = require("../controllers/proveedor.controller");

//Factura_ compras
const { 
    getFac_compras,
    postFac_compras,
    putFac_compras,
    deleteFac_compras,
    getFac_compras_fcom_id,
    getFac_compras_Proveedor,
    getFac_compras_id
} = require("../controllers/fac_compras.controller");
//detalle_ compras
const { 
    getDetalle_compras,
    postDetalle_compras,
    deleteDetalle_compras,
    getDetallePorNameCabecera
} = require("../controllers/detalle_compras.controller");

const router = Router()
//---------rutas proveedor---------
router.get("/proveedor",getProveedor)
router.post("/nuevoproveedor",postProveedor)
router.put("/editproveedor",putProveedor)
router.put("/borrarproveedor",deleteProveedor)
router.get("/proveedor/:name",getProveedorByName)
router.delete("/proveedor/:name",deleteFisicoProveedor)
router.get("/proveedorActivos",getProveedorActivos)
router.get("/proveedorInactivo",getProveedorInactivo)


//--------- Factura_compras---------

router.get("/mostrarfac_compras",getFac_compras)
router.post("/fac_compras",postFac_compras)
router.put("/fac_compras",putFac_compras)
router.delete("/fac_compras/:name",deleteFac_compras)
router.get("/fac_comprasId/:id", getFac_compras_id)
router.get("/fac_comprasPorProveedor/:id",getFac_compras_Proveedor)

//--------- Detalle_compras---------
router.get("/detalle_compras",getDetalle_compras)
router.post("/nuevodetalle_compras",postDetalle_compras)
router.delete("/detalle_compras",deleteDetalle_compras)
router.get("/detalle_compras/:name",getDetallePorNameCabecera)


module.exports=router;
