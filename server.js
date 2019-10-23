const express = require("express"),
    app = express(),
    port = 8000,
    path = require("path"),
    server = app.listen(port, console.log(`listening on port ${port}`));

var bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/database');
require('./server/config/routes.js')(app)

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
