const crypto = require('crypto')

const connection = require('../database/connection')

module.exports = {
    async create (request, response) { 
        const {title, description, value} = request.body;
        
        const emp_id = request.headers.authorization;
    
        const [id] = await connection('promocao').insert({
            title,
            description,
            value,
            emp_id
        });
        
        
        return response.json({id});
    },

    async delete (request,response){
        const {id} = request.params;

        const emp_id = request.headers.authorization;

        const promocao = await connection('promocao').where('id', id)
            .select('emp_id')
            .first();

        if (promocao.emp_id != emp_id){
            return response.status(401).json({error: "Operation not permitted"})
        }

        await connection('promocao').where('id',id).delete()
        return response.status(204).send();

    },
    async index (request, response){

        const promocao = await connection('promocao').select("*");
    
        return response.json(promocao);
    }

}