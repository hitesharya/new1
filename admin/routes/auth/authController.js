const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {User,Orders} = require('../../../models/index')
const jwtService = require('../../../services/jwt');
const { aggregate } = require('../../../models/user');


const saltRounds = 10;






class authController{

  Register =async(req,res)=>{
    console.log(req.body)

        const {email,password,phone}=req.body;
    let name = "hitesh";

        try{

            req.payload={
                email
            }
            
            console.log(password)

            let token = await jwtService.generateToken(req);

            console.log("---------"+token)


     await bcrypt.hash(password,saltRounds, async (err,hash)=>{
            if(err){
                console.log(err)
            }
            else{
                const user = new User({
                    email,
                    password:hash,
                    phone,
                    token,
                   
                })

                await user.save();
                res.json("ok dpne");
            }
        })
    }catch(err){
        console.log(err)

    }
    }
    Login=async (req,res)=>{
        console.log("hi")
        
        //const {email,password}= req.body;
        var id = mongoose.Types.ObjectId("61acd918235c0f7e5aa20d7a")
        const ordr = await User.find({_id:id})
        console.log(ordr);
        // const agg =  await User.aggregate([{$match:{_id:id}},{$lookup:{
        //     from:"orders",
        //     localField:"_id",
        //     foreignField:"user_id",
        //     as:"info"
            
        // }}]);
        //console.log(agg);
      //  26.891979378001846, 75.7734049394341
       // var old_id = "AIzaSyA_i9HXfcztbarBQ3v3CTRg4FvMX1ZjozE" ;
        // const agg =  User.aggregate([{$group:{_id:"$email" ,add:{$sum:"$phone"}}}]);
        // console.log(agg);
      // let hello =  agg.match({ email: { $in: [ "hitesharya595@gmail.com"] } });
        // let he = await User.find({phone:12345})
        // console.log("agg"+agg)

        // agg.forEach((i)=>{
        //    let het =[];
        //     console.log(i)
        // })
//   for await (const doc of agg) {
//    console.log(doc);
  // het.push(doc.email)
  
}


// aggregate.append({$project:{field:1}},{$limit:1})

// const pipeline =[{$match:{phone:{$gte:12345}}}]
// aggregate.append(pipeline)
//console.log(het)







        // req.payload={
        //     email
        // }

        // await User.findOne({email:email},(err,result)=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         bcrypt.compare(password,result.password, async (err,detail)=>{
        //             if(err){
        //                 console.log(err);
        //             }
        //             else{
        //                 let token = jwtService.generateToken(req);
        //                 result.token=token
        //                 await result.save();
        //               return  res.render('rating');
        //             }

                    

        //         })
        //     }
        // })


    
}

module.exports =  new authController();