//const MongoClient = require('mongodb'). MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return  console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

/*
db.collection('Todos').findOneAndUpdate(
    {_id: new ObjectID('5a534a95cae54a1ae0f1c193')},
    { $set: {
        completed: true
        }    
    },

    {
          returnOriginal: false,
    }).then((rez) => {(console.log(rez))})
*/    

db.collection('Users').update(
    {_id: new ObjectID('5a534a95cae54a1ae0f1c194')},
    { $set: { name: 'ABBAS' }, $inc: { age: 41 }  },
    {
    returnOriginal: false,
    })
    .then((rez) => {(console.log(rez))})


   // db.close();

    
})


////    ./mongod --dbpath ~/workspace/mongo-data