
const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:[{type:String, required:true}],
    from:{type:Array},
    uniqueString:{type:String, required:true},
    verifiedEmail:{type:Boolean, required:true}, 
    userPic:{type:String, required:true}
})

const User = mongoose.model('users', userSchema)
module.exports = User