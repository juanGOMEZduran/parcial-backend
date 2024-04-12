import { checkSchema } from "express-validator";

export const postProductoValidator=checkSchema(
    {
        nombre:{
            errorMessage:'Nombre no valido',
            noEmpy:true,
            isLength: {
                errorMessage:'el tamaño debe der minimo un carrecter',
                options: {min: 1, max: 100}
            }
        },
        valor:{
            matches:{options: /^[0-9]+$/ },
            errorMessage: 'valor no valido'
        }
    },
    ["body"]
);