
exports.up = function(knex) {
    return knex.schema.createTable('promocao', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('emp_id').notNullable();
        
        table.foreign('emp_id'). references('id').inTable('empresa')
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('promocao');
  
};
