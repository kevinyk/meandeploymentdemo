// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function() {
  return {
	// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
    	Product.find({}, function(err, results){
    		if(err){
    			console.log(err);
    		}else {
    			res.json(results);
    		}
    	})
    },
    addProduct: function(req, res){
    	Product.create(req.body, function(err, results){
    		if(err){
    			console.log(err);
    		}else{
    			res.json(results);
    		}
    	})
    },
    decrementProduct: function(req, res){
        console.log(req.body);
        Product.update({name:req.body.product}, {$inc: {quantity:-req.body.quantity}}, [], function(err,results){
            if(err){
                console.log(err);
            }else{
                res.json(results);
            }
        });
    }
  }
})();