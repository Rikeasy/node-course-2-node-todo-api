// const MongoClient= require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err){
return  console.log('unable to connect to db');
}
console.log('connectet to MongoDB Server');

// db.collection('todos').findOneAndUpdate({
//   _id: new ObjectID('5ba1fca6812ef70123a35b29')
// }, {
//   $set:{
//     completed: false
//   }
// }, {
//     returnOriginal: false
//   }).then((result) =>{
//     console.log(result);
// });

db.collection('todos').findOneAndUpdate({
  _id: new ObjectID('5ba1fca6812ef70123a35b29')
}, {
  $inc:{
    age:1
  }
}, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
});

// db.close();
});
