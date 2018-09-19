// const MongoClient= require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err){
return  console.log('unable to connect to db');
}
console.log('connectet to MongoDB Server');

// db.collection('todos').find({
//   _id: new ObjectID("5b9f79af02b1f407b9108fef")
// }).toArray().then((docs)=>{
//   console.log('todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// },(err)=>{
//   console.log('unable to fatch todos', err);
// });

db.collection('User2').find({
  "name": "Tim"
}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs, undefined, 2));

},(err)=>{
  console.log('unable to fatch todos', err);
});

// db.close();
});
