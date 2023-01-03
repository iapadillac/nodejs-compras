const { db } = require("../config/connection")

// GET Detalle compras
const getDetalle_compras = async (req, res) => {
    const response = await db.any('select * from detalle_compras order by 1')
    res.json(response)
}
//---------Buscar dObjetos de la cabecera por String----------->Detalle
const getDetallePorNameCabecera =async (req,res)=>{
    const name=req.params.name
    console.log(name)
    const response = await db.any(`Select *
    from public.detalle_compras df, fac_compras f 
    where df.fcom_id=f.fcom_id  
    and  df.fcom_id=$1; `,[name])
    res.json(response)
}
// CREAR Detalle compras
const postDetalle_compras =async (req,res)=>{
    const {fcom_id, dcom_cantidad, prod_id, dcom_precio}=req.body
    const response = await db.any(`INSERT INTO public.detalle_compras (fcom_id, dcom_cantidad, prod_id, dcom_precio) 
    values($1,$2,$3,$4) returning* `,[fcom_id, dcom_cantidad, prod_id, dcom_precio])
    res.json({
        message:'detalle_compras creado correctamente',
        body:{
            fcom_id, dcom_cantidad, prod_id, dcom_precio
        }
        
    })
}

    // BORRAR Detalle compras
    const deleteDetalle_compras =async (req,res)=>{
        const {id}=req.body
        const response = await db.any(`DELETE FROM public.detalle_compras 
        where dcom_id=$1 `,[id])
        res.json({
            message:'eliminado correctamente',
            body:{
                id
            }
        })
    }


module.exports = {
    getDetalle_compras,
    postDetalle_compras,
    deleteDetalle_compras,
    getDetallePorNameCabecera

}