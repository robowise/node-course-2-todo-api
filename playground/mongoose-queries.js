const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');


var id = '5a5b3e1870ee2f18ee425bab';
/*       
if(!ObjectID.isValid(id)) {
    console.log('id not valid');
}
*/

Todo.find({
    _id: id
}).then((todo) =>{
    console.log("todos : ", todo);
});


Todo.findOne({
    _id: id
}).then((todo) =>{
    console.log("todos find one: ", todo);
});

/*
Todo.findById(id).then((todo) =>{
    console.log("todos find by ID: ", JSON.stringify(todo, undefined, 2));
    if(! todo) {
       return console.log('todo does not exist');
    }
}).catch((e) => console.log(e));
*/
/*
Users.findById(id).then((user) => {
    console.log('user find by ID : ', user);
    if(!user) {
        console.log('user not found');
    }
}).catch((e) => console.log(e));

*/




// 5a534a95cae54a1ae0f1c193