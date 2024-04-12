import express from "express";
import {env} from "./default.js"
import route from "../routes/index.routes.js"
import pgService from "../services/pg.Service.js";
import middleware from "../middlewares/index.middleware.js";

export default  class Server{
    constructor(){
        this.app =express();
        this.port=env.port;
    }
    connectionDB(){
        new pgService();
    }
    
    middlewares(){
        this.app.use(express.json());
        this.app.use(middleware);
    }
    routes(){
        this.app.use(route)
    }
    runServer(){
        this.app.listen(this.port, ()=>{
            console.log(`estoy en el puerto ${this.port}`);
        })
    }

    load(){
        this.connectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
        
    }
}