// Dependencies

const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

// Routes

// GET routes
app.get("/",  (request,response) => {
    console.log(response);
    response.send("Hello World");
});

app.get("/goodbye", (req,res) => {
    const hello = "Goodbye";
    res.send(hello);
});

app.get("/profile/:id", (req,res) => {
    res.send("Your id is " + req.params.id)
});

// POST routes
app.post("/", (req,res) => {
    console.log(req.body)
    res.send("Hello")
})

// Delete routes
app.delete("/:id", (req,res) => {
    console.log(req.body)
    res.send("DElETED")
})

// Configuration

app.listen(3000, () => {
    console.log("Server Started");
})

