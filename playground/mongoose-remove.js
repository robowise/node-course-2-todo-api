const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

/*
Todo.remove({}).then((result) =>{
    console.log(result);
});
*/

Todo.findOneAndRemove({_id: '5a6089169b31bb16ce6c1ea6' }).then((todo) => {
    console.log(todo);
});

/* 
Todo.findByIdAndRemove('5a60869bd80ce11665ae0be1').then((Todo) => {
    console.log(Todo);
});
*/

