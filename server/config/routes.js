// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
// First, at the top of your routes.js file you'll have to require the controller
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');
module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
// modify the route to look like this
	app.get('/customers', function(req, res) {
	  customers.index(req, res);
	})
// note how we are delegating to the controller and passing along req and res
	app.post('/addCustomer', function(req, res){
		customers.addCustomer(req,res);
	})
	app.post('/deleteCustomer', function(req,res){
		console.log(req.body);
		customers.deleteCustomer(req,res);
	})
	app.get('/orders', function(req, res) {
	  orders.index(req, res);
	})
	// note how we are delegating to the controller and passing along req and res
	app.post('/addOrder', function(req, res){
		orders.addOrder(req,res);
	})
	app.get('/products', function(req,res){
		products.index(req,res);
	})
	app.post('/addProduct', function(req, res){
		products.addProduct(req,res);
	})
	app.post('/decrementProduct', function(req, res){
		products.decrementProduct(req,res);
	})
	
};