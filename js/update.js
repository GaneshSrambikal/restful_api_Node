let fs = require('fs'),
    express = require('express'),
    app = express();

let user = {
    "user4": {
        "name": "trump",
        "password": "thewall",
        "profession": "president",
        "id": 4
    }
};

app.post('/updateuser', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        if (err) {
            console.log(err.stack);
        } else {
            data = JSON.parse(data);
            data["user4"] = user["user4"];
            let store = JSON.stringify(data); //should be string because ,currently its an object / JSON format
            //write the data to the file users,json
            fs.writeFile(__dirname + "/" + "users.json", store, function (err) {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log("File has been updated.");
                    res.end("File has been updated.\n" + store);
                    console.log(JSON.parse(store));
                }
            });
        }
    });
});

app.listen(8081, function () {
    console.log("sever started at 8081");
});