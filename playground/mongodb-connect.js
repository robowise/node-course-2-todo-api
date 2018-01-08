//const MongoClient = require('mongodb'). MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

/*
var obj = ObjectID();
console.log(obj);
*/

/*
var user = {name: 'fouad', age: 25};

var {name, age} =user;
console.log(age, name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return  console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    db.collection('Todos').insertOne({
        text: 'walk the dog',
        completed: true
    }, (err, result) => {
    if (err) {
       return console.log('unable to insert Todo', err);
    }
    
    console.log(JSON.stringify(result.ops, undefined, 2));
    
    });


    db.collection('Users').insertOne({
       // _id: 1234,
        name: 'fouad',
        age: 50,
        location: 'khobar'
    }, (err, result) => {
        if (err) {
          return  console.log('unable to insert user', err);
        }
        
       // console.log(result.ops[0]._id.getTimestamp());
        console.log(result.ops);
    });
    

    db.close();
});


