//const MongoClient = require('mongodb'). MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return  console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    /*
    db.collection('Todos')
    .find({_id: new ObjectID('5a5203487c16ab10e1d08d66')})
    .toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, 0, 2));
    }, (err) => {
        console.log('unable to find Todos, err');
        });
    */  
/*
     db.collection('Todos')
    .find()
   // .count()
   .toArray()
    .then((docs) => {
    
    console.log(docs);
    }, (err) => {
        console.log('unable to find Todos, err');
        });
 */      
        
          db.collection('Users')
    .find()
   // .count()
   .toArray()
    .then((docs) => {
    
    console.log(docs);
    }, (err) => {
        console.log('unable to find Todos, err');
        });
      
        
    /*    
     db.collection('Todos')
    .find()
    //.toArray()
    .count()
    .then((count) => {
    console.log(`Todos: ${count}`);
     
    //console.log(JSON.stringify(count, 0, 2));
    }, (err) => {
        console.log('unable to find Todos, err');
        });
    */    
        
    db.close();
});
    



////    ./mongod --dbpath ~/workspace/mongo-data