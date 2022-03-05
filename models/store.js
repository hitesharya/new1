const mongoose = require('mongoose');
const geocoder = require('../utils/geoCoder')
 

const StoreSchema = new  mongoose.Schema({
    storeId : {type:String ,
        required:[true,'Please add a store ID'],
        unique:true,
        trim:true,
        maxlength:[10,"Store id must be less than 10 characters"]
    },

    address:{
        type:String,
        required:[true,'Please add an address']
    },

    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
         
        },
        coordinates: {
          type: [Number],
          index:'2dsphere'
        },

        formattedAddress: {type:String}

    },
    createdAt:{
        type:Date,
        default: Date.now
    }
   
})

//geocode & create location
StoreSchema.pre('save',async (next)=>{
    const loc = await geocoder.geocode(this.address);
    console.log(loc);
});

module.exports  = mongoose.model('Store',StoreSchema);

