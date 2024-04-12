import { Router } from "express";
import routerProducto from "./producto.routes.js";
import authRouter from "./auth.routes.js";

const route= Router();

route.use('/producto', routerProducto)
route.use('/auth', authRouter)


export default route;
