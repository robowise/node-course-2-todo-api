var express = require("express");
var bodyParser = require("body-parser");


var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {Users} = require("./models/user");
var app = express();
const port = process.env.PORT || 8080;


const {ObjectID} = require('mongodb');
//..//
app.use(bodyParser.json());

//..//
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
todo.save().then((doc) => {
    res.send(doc);
}, (e) => {
    res.status(400).send(e);
});
});

//..//
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});
//*******************************************//
//getting the ID
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
if(!ObjectID.isValid(id)) {
   return res.status(404).send('oops!');
}

//checking by ID

Todo.findById(id).then((todo) =>{
    console.log("todos find by ID: ", JSON.stringify(todo, undefined, 2));
    if(! todo) {
       return res.status(404).send();
    }
    
    res.send({todo});
    
    
}).catch((e) => res.status(400).send());

});
//***************** DELETE ***************************//
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
    return res.status(404).send('oops!');
    }
    Todo.findByIdAndRemove(id).then((todo) => {
   // console.log(todo);
     if(! Todo) {
       return res.status(500).send();
    }
    res.status(200).send({todo});
    }).catch((e) => res.status(400).send()) ;
    
});


app.listen(port, () => {
    console.log(`started on port: ${port} `);
});

module.exports = {app};

//  https://monog-tut-roboserve.c9users.io:8080/todos