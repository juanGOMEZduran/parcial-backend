import pgService from "../services/pg.Service.js"



export const getProductoModel = async ()=>{
    const pg =new pgService();
    return await pg.connection.query("Select * from PRODUCTO")
}

export async function getProductoUnicoModel (id){
    try{
        const pg =new pgService();
    return await pg.connection.oneOrNone("Select * from PRODUCTO WHERE ID_PRODUCTO= $1", [id])
    }catch (error){
        return "esto es un error";
    }
    
}

export const postProductoModel = async ( nombre, detalle, valor)=>{
    try{
        const pg =new pgService();
    return await pg.connection.query("INSERT INTO PRODUCTO (NOMBRE , DETALLE, VALOR) VALUES ($1,$2,$3) RETURNING *", [nombre, detalle, valor])
    }catch (error){
        return "esto es un error";
    }
    
}

export const putProductoModel = async ( id, nombre, detalle, valor)=>{
    try{
        const pg =new pgService();
    return await pg.connection.query("UPDATE PRODUCTO SET NOMBRE=$1, DETALLE=$2, VALOR=$3 WHERE ID_PRODUCTO =$4  RETURNING *",[nombre, detalle, valor, id])
    }catch (error){
        return "esto es un error";
    }
    
}

export const deleteProductoModel =async (id)=>{
    try{
        const pg =new pgService();
    return await pg.connection.query("DELETE FROM PRODUCTO WHERE id_producto=$1;",[id])
    }catch (error){
        return "esto es un error";
    }
}