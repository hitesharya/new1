const mongoose = require('mongoose');
 

const orderSchema = new  mongoose.Schema({
   user_id:{type:mongoose.Schema.Types.ObjectId,
            ref:"users"
},
    product_name : {type:String },
    product_price : {type:Number},
    product_weight:{type:String}
})

module.exports  = mongoose.model('order',orderSchema);

