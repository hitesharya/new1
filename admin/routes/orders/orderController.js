const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {User} = require('../../../models/index')
const jwtService = require('../../../services/jwt')


const saltRounds = 10;






class orderController{

  order =async(req,res)=>{
    console.log(req.body)

        const {email,password,phone}=req.body;


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
                    token
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
        
        const {email,password}= req.body
        req.payload={
            email
        }

        await User.findOne({email:email},(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                bcrypt.compare(password,result.password, async (err,detail)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        let token = jwtService.generateToken(req);
                        result.token=token
                        await result.save();
                      return  res.render('rating');
                    }

                    

                })
            }
        })


    }
}

module.exports =  new authController();