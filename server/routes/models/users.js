const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://hee:2852@hee.pcfo2.mongodb.net/<dbname>?retryWrites=true&w=majority' , 
// {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
// .then(() => console.log("몽고디비 성공"))
// .catch(err => console.log(err))

let Schema = mongoose.Schema

let UserSchemas = new Schema({

 
  
    id: {
            type:String
    },

    pwd : {
        type:String
    },
    email: {
        type:String
    }

}, {timestamps: true})

let Users = mongoose.model('Video' , UserSchemas);

module.exports = {Users}