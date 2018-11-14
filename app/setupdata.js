const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(knexfile[environment]);

// knex('pizzas').insert({name: '💩', 
//                       crust: 'thick', 
//                       size: 'extra large', 
//                       cheeze: true
//                       })
//                       .then((result) => {
//                         console.log(result);
//                       }).catch((error) => {
//                         console.log(error);
//                       });

// knex('pizzas').insert({name: 'BoringAF',
//                       crust: 'yes',
//                       cheeze: true,
//                       size: 'medium'})
//                       .then((result) => {
//                                                 console.log(result);
//                                               }).catch((error) => {
//                                                 console.log(error);
//                                               });

// Promise.all([
// knex('toppings').insert({
//   name: 'artichoke',
//   pizza_id: 1
// }),
// knex('toppings').insert({
//   name: 'sun dried tomatoes',
//   pizza_id: 3
// }),
// knex('toppings').insert({
//   name: 'feta',
//   pizza_id: 2
// }),
// knex('toppings').insert({
//   name: 'more pizza',
//   pizza_id: 2
// }),
// knex('toppings').insert({
//   name: '🤗',
//   pizza_id: 3
// }),
// knex('toppings').insert({
//   name: '💩',
//   pizza_id: 2
// })
// ])
// .then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

                      