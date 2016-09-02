
exports.up = function(knex, Promise) {
  return knex.chema.createTable('albums',function(table){
    table.increments();
  })
};

exports.down = function(knex, Promise) {

};
