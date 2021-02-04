// var express = require('express');
// var mongoose = require("mongoose");
// var router = express.Router();
// const {Users} = require('./models/users')





// router.post('/login' , (req,res, next) => {

//     const param = req.body.id
//     const param1 = req.body.password
//     console.log("id:" + param)
//     console.log("pw :" + param1)
//     res.json({
//         message: "제공된 이메일에 해당하는 유저가 없다" ,
//         userId : param , userPwd : param1 
//     })


//     })



// router.post('/register' , (req,res, next) => {

//     const users = new Users({
//         id : req.body.id,
//         pwd: req.body.pwd,
//         Email: req.body.email
//     }) 
//     users.save((err,user) => {
//         if(err) return res.status(400).json({ success: false, err })
//         return res.status(200).json({
//             success: true 
// })
// })
// })


// module.exports = router;