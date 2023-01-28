const mongoose=require('mongoose')
const {Schema}=mongoose
const BookSchema=new Schema({
    id:{type:String},
    authorid:{type:String},
    name:{
        type:String,
        required:true,
        
    },
    gener:{
        type:String,
        required:true,
        
    }

})
module.exports =mongoose.model('book',BookSchema)