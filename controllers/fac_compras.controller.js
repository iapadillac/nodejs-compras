const { db } = require("../config/connection")

// get Factura Compras
const getFac_compras = async (req, res) => {

    const response = await db.any('select * from fac_compras order by 1')

    res.json(response)
}

// CREAR Fac_compras
const postFac_compras = async (req, res) => {
    const { fcom_id, pro_cedula_ruc, fcom_fecha, fcom_credito_contado, fcom_fechavencimiento, fcom_total } = req.body

    const response = await db.any(`INSERT INTO public.fac_compras (fcom_id, pro_cedula_ruc, fcom_fecha, fcom_credito_contado, fcom_fechavencimiento,fcom_total) 
    values($1,$2,$3,$4,$5,$6) returning*`, [fcom_id, pro_cedula_ruc, fcom_fecha, fcom_credito_contado, fcom_fechavencimiento, fcom_total])
    res.json(response)
}
// ACTUALIZAR Proveedor
const putFac_compras = async (req, res) => {
    const { fcom_id, pro_cedula_ruc, fcom_fecha, fcom_credito_contado, fcom_fechavencimiento } = req.body
    const response = await db.any(`UPDATE public.fac_compras set pro_cedula_ruc=$2
        ,fcom_fecha=$3, fcom_credito_contado=$4,fcom_fechavencimiento=$5
        where fcom_id=$1`, [fcom_id, pro_cedula_ruc, fcom_fecha, fcom_credito_contado, fcom_fechavencimiento])
    res.json({
        message: 'Fac_compras actualizado correctamente',
        body: {
            fcom_id, pro_cedula_ruc, fcom_fecha, fcom_credito_contado, fcom_fechavencimiento
        }
    })
}


// BORRAR Proveedor
const deleteFac_compras = async (req, res) => {
    const name = req.params.name
    console.log(name + "id_factura")
    const response = await db.any(`DELETE FROM public.detalle_compras
        WHERE fcom_id=$1`, [name])
    const respons = await db.any(`DELETE FROM public.fac_compras
        WHERE fcom_id=$1`, [name])
    res.json({
        message: 'Fac_compras eliminado correctamente',
        body: {
            name
        }
    })
}
//Ultimo registro de la columna fcom_id
const getFac_compras_fcom_id = async (req, res) => {
    const response = await db.any(`select fcom_id from fac_compras where char_length(fcom_id)>(SELECT max(length(fcom_id))  FROM fac_compras)-1 ORDER BY fcom_id DESC LIMIT 1`);
    res.json(response)
}

//fact compras por Id fcom_id
/*const getFac_compras_id = async (req, res) => {
    const name = req.params.name
    const response = await db.any(`select * from fac_compras WHERE fcom_id = $1`, [name])
    res.json(response)
}
*/
// get Factura Compras por proveedor
const getFac_compras_Proveedor = async (req, res) => {
    const name = req.params.name
    const response = await db.any(`SELECT * from fac_compras WHERE pro_cedula_ruc = $1`, [name])
    res.json(response)
}

const getFacturabyid = async (req, res) => {
    
        const { id } = req.params
        const facturas = await db.any(`SELECT * FROM fac_compras WHERE fcom_id = $1;`, [id]);
        res.json(facturas)

}





module.exports = {
    getFac_compras,
    postFac_compras,
    putFac_compras,
    deleteFac_compras,
    getFac_compras_fcom_id,
    getFacturabyid,
    getFac_compras_Proveedor

}