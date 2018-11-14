
exports.up = function(knex, Promise) {
  return knex.schema.createTable('toppings', function (table) {
    table.increments();
    table.string('name');
    table.integer('pizza_id');
    table.foreign('pizza_id').references('pizzas.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('toppings');
};
