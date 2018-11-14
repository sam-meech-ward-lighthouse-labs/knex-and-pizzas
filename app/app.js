const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(knexfile[environment]);

// knex('pizzas')
// .whereNot({
//   crust: 'yes'
// })


knex('pizzas')
.where({
  crust: 'yes'
})
.innerJoin('toppings', 'pizzas.id', 'toppings.pizza_id')

.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
