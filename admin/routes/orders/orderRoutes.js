const express= require('express');
const router = express.Router();
const orderCtrl = require('./authController');
const jwtService = require('../../../services/jwt')



router.get('/order',(req,res)=>{
    res.render('orderpage');
})

router.post('/order',orderCtrl.order);



module.exports = router;