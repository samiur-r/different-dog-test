var chargebee = require("chargebee");

/**
 * Get customer list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
		chargebee.subscription.list().request(function(error,result) {
			if(error){
				//handle error
				console.log(error);
			}else{
				for(var i = 0; i < result.list.length;i++){
						var entry=result.list[i]
						console.log(entry);
						return res.json({customers: entry.customer, subscription: entry.subscription});
					}
				}
			});
  } catch (error) {
    next(error);
  }
};
