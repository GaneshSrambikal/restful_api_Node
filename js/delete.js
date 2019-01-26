let fs = require('fs'),
    express = require('express'),
    app = express();

app.delete('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function (err, data) {
        if (err) {
            console.log(err.stack);
        } else {
            let users = JSON.parse(data);
            delete users["user" + req.params.id];
            console.log("user" + req.params.id + " Deleted. " + JSON.stringify(users));

            let store = JSON.stringify(users);
            fs.writeFile(__dirname + "/" + "users.json", store, function (err) {
                if (err) {
                    console.log(err.stack)
                } else {
                    console.log("DB is updated.");
                    res.end("user" + req.params.id + " Deleted. \n DB is updated.\n " + JSON.stringify(users));
                }
            });
        }
    });
});

app.listen(8081, function () {
    console.log("server start at 8081");
});