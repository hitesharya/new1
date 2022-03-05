// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');
// const {Store} = require('../../../models/index')


// class locations {
//     getStore= async (req,res)=>{
//         try{
//             const stores = await Store.find({});

//             return res.status(200).json({
//                 success:true,
//                 count:stores.length,
//                 data:stores
//             })
//         }catch(err){
//             console.log(err);
//             res.status(500).json({error:'Server error'});
//         }
//     }


//     putStore= async (req,res)=>{
//         try{
//             console.log(req.body);
//             const store = await Store.create(req.body);

//             return res.status(200).json({
//                 success:true,
//                 data:store
//             })
//         }catch(err){
//             console.log(err);
//             res.status(500).json({error:'Server error'});
//         }
//     }
// }

// module.exports = new locations();