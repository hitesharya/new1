const jwt = require('jsonwebtoken');

class jwtService{
     verifyToken= async (req,res,next)=>{
         let token = req.body.token;
         console.log("chal be kuuuttteeeee")
         
 console.log(token)
      let data = await  jwt.verify(token,process.env.JWT_SECRET_KEY)

      if(data.length>0){
        next();
      }
      else{
          res.json("token is not valid");
      }
    }

    generateToken = async(req,res)=>{
        let payload = req.payload;
        

        await jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:'20m'},(err,result)=>{
            if(err){
                console.log(err);

            }else{
                console.log("hello"+result)
                return result;
            }
        })
    }


}

module.exports = new jwtService();