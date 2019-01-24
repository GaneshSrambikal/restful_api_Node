//List a User
let express = require('express');
app = express();
fs = require('fs');

//api request show the list of users from users.json file
app.get('/listUsers', function (req, res) {
    //read the json file
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        if (err) { console.log(err.stack); }
        else {//log all the dat in the file
            console.log(data);
            res.end(data);
        }
    })
})

//api request show the specified user from user.json
app.get('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        if (err) { console.log(err) }
        else {
            let users = JSON.parse(data);
            if (!users["user" + req.params.id]) {  //check if there's no records exists
                console.log("No such records.");
                res.send("No such records.");
            } else {
                let result = users["user" + req.params.id]; //get the specfied user detail
                console.log(JSON.stringify(result))
                res.send(result);
            }
        }
    })
})

//start a server
app.listen(8081, function () {
    console.log("server running at 8081");
});