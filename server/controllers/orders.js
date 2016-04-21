// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function() {
  return {
	// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
    	Order.find({}, function(err, results){
    		if(err){
    			console.log(err);
    		}else {
    			res.json(results);
    		}
    	})
    },
    addOrder: function(req, res){
    	Order.create(req.body, function(err, results){
    		if(err){
    			console.log(err);
    		}else{
    			res.json(results);
    		}
    	})    	
    }
  }
})();