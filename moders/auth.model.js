import pgService from "../services/pg.Service.js";

export const getUsuario = async( username, password )=>{
    const pg=new pgService();
    return await pg.connection.oneOrNone( `SELECT USERNAME FROM USUARIO WHERE USERNAME =$1 AND PASSWORD=md5($2)`,[username, password]);

}