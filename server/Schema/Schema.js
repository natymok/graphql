const graphql=require('graphql')
const _=require('lodash')
const book=require('../models/book')
const author=require('../models/author')
const { resolve } = require('path')

const{GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLInt,GraphQLList}=graphql
const BookType=new GraphQLObjectType({
    name:'book',
    fields:()=>({
      id:{type:GraphQLString},
      name:{type:GraphQLString},
      gener:{type:GraphQLString},
      author:{
        type:AuthorType,
        async resolve(parent,args){
        const  res1= await author.find({id:parent.authorid})
          return res1

        }
    }
    })
})
const AuthorType=new GraphQLObjectType({
    name:'Author',
    fields:()=>({
      id:{type:GraphQLString},
      name:{type:GraphQLString},
      age:{type:GraphQLInt},
      books:{
        type:new GraphQLList(BookType),
        async resolve(parent){

            const  res2= await book.find({authorid:parent.id})
            return res2
        }
    }
    })
})
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
      book:{
        type:BookType,
        args:{id:{type:GraphQLString}},
        async resolve(parent,args){
             
              const bookdata=await book.findOne({id:args.id})
              return bookdata
    
            }
    
    } ,
    author:{
        type:AuthorType,
        args:{id:{type:GraphQLString}},
        async resolve(parent,args){
            const authordata=await author.findOne({id:args.id})
            return authordata
  
           

        }
    } 
      
      
    }
})
module.exports=new GraphQLSchema({
    query:RootQuery
})