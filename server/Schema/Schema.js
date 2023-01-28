const graphql=require('graphql')
const _=require('lodash')
var books=[
    {name:'girmte-shitec',author:'solokasa',gener:'sci-fi',id:'1'},
    {name:'medemer',author:'abiy',gener:'history',id:'2'},
    {name:'fiker-eske-mekaber',author:'bealu',gener:'love',id:'3'}




]
const{GraphQLObjectType,GraphQLString,GraphQLSchema}=graphql
const BookType=new GraphQLObjectType({
    name:'book',
    fields:()=>({
      id:{type:GraphQLString},
      name:{type:GraphQLString},
      gener:{type:GraphQLString}
    })
})
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
      book:{
        type:BookType,
        args:{id:{type:GraphQLString}},
        resolve(parent,args){
            return _.find(books,{id:args.id})
    
            }
    
    }  
      
      
    }
})
module.exports=new GraphQLSchema({
    query:RootQuery
})