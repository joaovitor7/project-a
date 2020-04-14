const crypto = require('crypto')

const connection = require('../database/connection')

module.exports = {
    async create (request, response) { 
        const {name, email, whatsapp, city, uf} = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('empresa').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        
        
        return response.json({id});
    },
    async index (request, response){

        const empresas = await connection('empresa').select("*");
    
        return response.json(empresas);
    }

}