
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pizzas', function (table) {
      table.increments();
      table.string('name');
      table.string('crust');
      table.string('size');
      table.boolean('cheeze');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pizzas');
};
