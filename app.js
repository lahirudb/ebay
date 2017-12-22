const express = require('express');
const app = express();
const path = require('path');
const user = require('./routes/users');

//connect to public folder(Front end)
app.use(express.static(path.join(__dirname,"public")));


//root page
app.get('/', function (req, res) {
    res.send('hello world');
});

//for user route(/user)
app.use('/users', user);


app.listen(3000, function() {
console.log("Listening to port 3000");
});