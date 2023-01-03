const { db } = require("../config/connection")

// get Proveedor
const getProveedor = async (req, res) => {
    const response = await db.any(`select * from proveedor   order by 1`)
    res.json(response)
}
//get por nombre
const getProveedorByName = async (req, res) => {
    const name = req.params.name
    const response = await db.any(`select * from proveedor 
    where pro_estado='true' and pro_cedula_ruc=$1`, [name])
    res.json(response)
}


// CREAR Proveedor
const postProveedor = async (req, res) => {
    const { pro_cedula_ruc, pro_nombre, pro_direccion, pro_ciudad, pro_telefono, pro_correo, pro_credito_contado } = req.body
    const response = await db.any(`INSERT INTO public.proveedor (pro_cedula_ruc, pro_nombre, pro_direccion, pro_ciudad, pro_telefono, pro_correo, pro_credito_contado, pro_estado) 
    values($1,$2,$3,$4,$5,$6,$7,true)`, [pro_cedula_ruc, pro_nombre, pro_direccion, pro_ciudad, pro_telefono, pro_correo, pro_credito_contado])
    res.json({
        message: 'Producto creado correctamente',
        body: {
            pro_cedula_ruc, pro_nombre, pro_direccion, pro_ciudad, pro_telefono, pro_correo, pro_credito_contado
        }

    })
}
// ACTUALIZAR Proveedor
const putProveedor = async (req, res) => {
    const { pro_cedula_ruc, pro_nombre, pro_direccion, pro_ciudad, pro_telefono, pro_correo, pro_credito_contado, pro_estado } = req.body
    console.log( pro_estado+"3333")
    const response = await db.any(`UPDATE public.proveedor set pro_nombre=$2
        ,pro_direccion=$3, pro_ciudad=$4,pro_telefono=$5,pro_correo=$6,pro_credito_contado=$7,pro_estado=$8
        where pro_cedula_ruc=$1`, [pro_cedula_ruc, pro_nombre, pro_direccion, pro_ciudad, pro_telefono, pro_correo, pro_credito_contado,pro_estado])
    res.json({
        message: 'actualizado correctamente',
        body: {
            pro_cedula_ruc, pro_nombre, pro_direccion, pro_ciudad, pro_telefono, pro_correo, pro_credito_contado,pro_estado
        }
    })
}


// BORRAR Proveedor
const deleteProveedor = async (req, res) => {
    const { pro_cedula_ruc } = req.body
    const response = await db.any(`UPDATE public.proveedor set  pro_estado=false  
        where pro_cedula_ruc=$1`, [pro_cedula_ruc])
    res.json({
        message: 'eliminado correctamente',
        body: {
            pro_cedula_ruc
        }
    })
}
// BORRAR Proveedor
/*
const deleteFisicoProveedor = async (req, res) => {
    const name = req.params.name
    console.log(name + "id_factura_1")
    const responses = await db.any(`DELETE  from public.detalle_compras 
	WHERE fcom_id in (select fcom_id from fac_compras where pro_cedula_ruc=$1);`,[name])
    console.log(name + "id_factura_2")
    const respons = await db.any(`DELETE FROM public.fac_compras
        WHERE pro_cedula_ruc=$1;`, [name])
        console.log(name + "id_factura_3")
    const response = await db.any(`DELETE FROM public.proveedor
        where pro_cedula_ruc=$1;`, [name])
    res.json(respons)
}
*/
const deleteFisicoProveedor = async (req, res) => {
    const name  = req.params.name
    const responses = await db.any(`DELETE  from public.detalle_compras 
	WHERE fcom_id in (select fcom_id from fac_compras where pro_cedula_ruc=$1);`,[name])
    console.log(name + "id_factura_2")
    const respons = await db.any(`DELETE FROM public.fac_compras
        WHERE pro_cedula_ruc=$1;`, [name])
    const response = await db.any(`DELETE FROM public.proveedor
    where pro_cedula_ruc=$1`, [name])
    console.log(name + "id_cedula")
    res.json(response)
}
// get Proveedor Activos
const getProveedorActivos = async (req, res) => {
    const response = await db.any(`select * from proveedor where pro_estado='true' order by 1`)
    res.json(response)
}
// get Proveedor Inactivo
const getProveedorInactivo = async (req, res) => {
    const response = await db.any(`select * from proveedor where pro_estado='false' order by 1`)
    res.json(response)
}


module.exports = {
    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor,
    getProveedorByName,
    deleteFisicoProveedor,
    getProveedorActivos,
    getProveedorInactivo
}