var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

const route = require("./routes/route");

var app = express();
const port = 3000;

//connect to mongo db
mongoose.connect("mongodb://localhost:27017/contactList");

//on connection
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo db @ 27017");
});
mongoose.connection.on("error", err => {
    if (err) {
        console.log("connection error :", err);
    }
});

//adding middleware - cors
app.use(cors());
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api", route);

//testing server
app.get("/", (req, res) => {
    res.send("foobar");
});
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});