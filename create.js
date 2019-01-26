let fs = require('fs'),
    express = require('express'),
    app = express();

//new user
let user = {
    "user4": {
        "name": "trump",
        "password": "thewall",
        "profession": "president",
        "id": 4
    }
};

app.post('/adduser', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        if (err) {
            console.log(err.stack);
        } else {
            data = JSON.parse(data);
            data["user4"] = user["user4"]; //assigning user4 in data 
            console.log(data);
            res.end(JSON.stringify(data));
        }
    });
});

app.listen(8081, function () {
    console.log("sever started at 8081");
});