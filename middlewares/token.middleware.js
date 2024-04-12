import jwt from "jsonwebtoken"
import { env } from "../config/default.js"

export const verifyToken=(req, res, next)=>{
    let token =req.headers["authorization"]
    if(!token){
        return res.status(401).json({
            success:false,
            msn:"autorizaton requerid 1"
        })
    }
    token=token.split(" ")
    if(token[0]!== 'Bearer'){
        return res.status(401).json({
            success:false,
            msn:"autorizathion requerid 2 "
        })
    }


    jwt.verify(token[1], env.secret,(err, decode)=>{
        if(err){
            return res.status(401).json({
                success:false,
                msn:"autorization",
                error:err
            })
        }
        next();
    })
}