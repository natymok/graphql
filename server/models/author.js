const mongoose=require('mongoose')
const {Schema}=mongoose
const AuthorSchema=new Schema({
    id:{type:String},
   
    name:{
        type:String,
        required:true,
        
    },
    age:{type:String}
   

})
module.exports =mongoose.model('author',AuthorSchema)