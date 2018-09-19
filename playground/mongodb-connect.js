// const MongoClient= require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj=new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err){
return  console.log('unable to connect to db');
}
console.log('connectet to MongoDB Server');

// db.collection('todos').insertOne({
//   text:'something to do',
//   completed: false
// },(err, result)=>{
//   if(err){
//     return console.log('Unable insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('User2').insertOne({
//   name:'Tim',
//   age: 20,
//   location: 'Unna'
// },(err, result)=>{
//   if(err){
//     return console.log('Unable insert User',err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp() ));
// });

db.close();
});
