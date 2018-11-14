const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(knexfile[environment]);

// const result = knex.schema.createTable('pizzas', function (table) {
//   table.increments();
//   table.string('name');
//   table.string('crust');
//   table.string('size');
//   table.boolean('cheeze');
// });

// result.asCallback((err, result) => {
//   if (err) {
//     console.log("EERRRRR", err);
//     return;
//   }
//   console.log(result);
// });

// result.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.error(error);
// });

knex.schema.createTable('toppings', function (table) {
  table.increments();
  table.string('name');
  table.integer('pizza_id');
  table.foreign('pizza_id').references('pizzas.id');
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
