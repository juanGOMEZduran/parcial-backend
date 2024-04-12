import { getProductoModel , getProductoUnicoModel, postProductoModel, putProductoModel, deleteProductoModel} from "../moders/producto.model.js"





export const getProducto = async (req, res)=>{
    let data = await getProductoModel();
    res.status(200).json({msg:"esto es get ", data:data});
}
export const postProducto = async (req, res)=>{
    let {detalle, nombre, valor}=req.body;
    let  data =await  postProductoModel(nombre, detalle, valor);
    res.status(200).json({msg:"esto es post ", data:data})
}

export const getProductoUnico = async (req, res)=>{
    let {id}=req.params;
    let data= await getProductoUnicoModel(id);

    res.status(200).json({msg :'Esto es get unico', data:data});
}

export const putProductoUnico = async (req, res)=>{
    let {id}=req.params;
    let {detalle, nombre, valor}=req.body;
    let  data =await  putProductoModel(id,nombre, detalle, valor);

    res.status(200).json({msg :'Esto es put unico', data:data});
}


export const deleteProducto= async (req, res)=>{
    let {id}=req.params;
    let data= await getProductoUnicoModel(id);
    if(data==null){
        res.status(200).json({msg :'No existe dicho id'});
    }else{
        let data= await deleteProductoModel(id);
        res.status(200).json({msg :'se hizo correctamente el delete'});
    }

    
}

export default{
    getProducto,
    postProducto,
    getProductoUnico,
    putProductoUnico,
    deleteProducto
    
    
}

