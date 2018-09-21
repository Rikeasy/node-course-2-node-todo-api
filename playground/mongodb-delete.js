// const MongoClient= require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err){
return  console.log('unable to connect to db');
}
console.log('connectet to MongoDB Server');

db.collection('todos').deleteOne({text:'eat lunch'}).then((result)=>{
console.log(result);
})

// db.close();
});
