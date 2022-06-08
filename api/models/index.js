const Users = require('./Users');
const Products = require('./Products');
const Orders = require('./Orders');
const Reviews = require('./Reviews');

Products.hasOne(Orders);
Products.belongsTo(Users);
Products.belongsToMany(Users, { through: 'products_x_users' });

Users.belongsTo(Orders);
Users.belongsToMany(Products, { through: 'users_x_products' });

Orders.belongsTo(Users);
Orders.belongsTo(Products);

Reviews.belongsTo(Users);
Reviews.belongsTo(Products)

module.exports = { Users, Products, Orders, Reviews };