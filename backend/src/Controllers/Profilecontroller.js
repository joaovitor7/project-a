const crypto = require('crypto')

const connection = require('../database/connection');

module.exports = {
    async index (request, response){

        const emp_id = request.headers.authorizathion;

        const promocao = await connection('promocao').where('emp_id',emp_id).select("*");
    
        return response.json(promocao);
    }
}