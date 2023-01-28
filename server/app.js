const express=require('express')
const mongoose=require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const schema=require('./Schema/Schema.js')
const app=express()
const book=require('./models/book')
const author=require('./models/author')
mongoose.set('strictQuery', true)
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

mongoose.connect('mongodb+srv://natymok:1234@cluster0.ocztl4e.mongodb.net/?retryWrites=true&w=majority',

{   useNewUrlParser:true,
    useUnifiedTopology:true,
    
     }
)
.then(()=>{
    app.listen(4000,()=>{
        console.log('sucessfully connected')
        console.log('server listening on port 4000')
    })

})
.catch((err)=>{
    console.log(err)
})
