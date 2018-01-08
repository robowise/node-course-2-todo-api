//const MongoClient = require('mongodb'). MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return  console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');


db.collection('Users').deleteMany({name: 'fouad'}).then((res) => {
    
    console.log(res);
});


/*
db.collection('Users').deleteOne({_id: new ObjectID('5a5326a811ff801093de3acc')}).then((ros) => {
    console.log(ros);
});
*/

/*
db.collection('Users').findOneAndDelete({_id: new ObjectID('5a532392a2ee910ed47c71b9')}).then((res) => {
    
    console.log(res);
})
*/


   // db.close();
});
    



////    ./mongod --dbpath ~/workspace/mongo-data