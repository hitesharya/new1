const express= require('express');
const router = express.Router();
const authCtrl = require('./authController');
const jwtService = require('../../../services/jwt')
//var geocoder = require('geocoder');
//const googleMapsClient = require('@google/maps')
const axios = require('axios')
//const NodeGeocoder = require('node-geocoder');

 
// Geocoding




 router.get('/login',async (req,res)=>{console.log('hello');

 


res.render("login")
// var address = "sita devi hospital ram nagar sodala jaipur rajasthan india"

// var config = {
//   method: 'get',
//   url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AlzaSyADKJ0J87cRHB5MjXjRHyzk6V7SGvBifuk",
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//     console.log(response.data);

//   //console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
})
router.get('/register',(req,res)=>{
    res.render('register');
})
router.post('/login',authCtrl.Login);
router.post('/register',authCtrl.Register);


module.exports = router;