const {SHA256} = require("crypto-js");

const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

var password = "12121";

/*
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    }); 
});
*/

var hashedPwd ='$2a$10$sfGZpfpAU6DKHrKjyEgF..HMtkyPv5IC.QwefbTY2FYZuXTmPSEJ2';

bcrypt.compare(password, hashedPwd, function(err, res) {
    console.log(res);
});


/*
var data = {
    id: 10
};

var token = jwt.sign(data, "secret");
console.log(token);

var decoded = jwt.verify(token, "secret");
console.log(decoded);
*/
