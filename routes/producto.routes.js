import { Router } from "express";
import productoContoller from "../controller/producto.contoller.js"; 
import { validate } from "../middlewares/validator.middleware.js";
import { postProductoValidator } from "../validators/producto.validator.js";

const routerProducto= Router();

routerProducto.get("/", productoContoller.getProducto )
routerProducto.get("/:id", productoContoller.getProductoUnico)
routerProducto.post("/", validate(postProductoValidator), productoContoller.postProducto )
routerProducto.put("/:id", productoContoller.putProductoUnico)
routerProducto.delete("/:id", productoContoller.deleteProducto)


export default routerProducto;