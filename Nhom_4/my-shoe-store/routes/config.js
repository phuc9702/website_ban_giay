const mongoose = require("mongoose")
const connect   = mongoose.connect('mongodb://127.0.0.1:27017/shoe')

connect.then(() =>{
    console.log("Database connected Succcesfully");
})
.catch(() => {
    console.log("Database cannot be connected");
});

//create a schema
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    }
})
const collection = new mongoose.model("store",LoginSchema)
module.exports = collection