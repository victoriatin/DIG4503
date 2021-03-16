import Express from "express";
import fs from "fs";

const App = Express();
const port = 3010;

// stops all other processes while it reads the content of the file its directed to
let fileContents = fs.readFileSync("database.json");

// turning a string into a JSON object (turn fileContents variable into a JSON object)
let database = JSON.parse(fileContents);

// Create a GET route called employees/:name where name is a route parameter. 
App.get('/employees/:name', (req, res) => {
    // If the name is not found, the route should respond with a JSON object, {error: "not found"}
    let result = {"error": "not found"};

    /* use the forEach method to return a JSON object with the property, 
    {name: "name", age: #}, for exact matches of a name found in the database.json */
    // run function for each value in the array
    database.forEach((value) => {
        if(req.params.name == value.name) { //if param == value of name in array
            result = value;
        }
    });

    res.json(result);
});

// Create a GET route called ages/:number where number is a route parameter. 
App.get('/ages/:number', (req, res) => {
    // If search cannot be found, the route should respond with a JSON object, {error: "not found"}
    let result = {"error": "not found"};

    /* use the forEach method to return a JSON object, 
    {name: "name", age: #}, for exact matches of an age found in database.json */
    // run function for each value in the array
    database.forEach((value) => {
        if(req.params.number == value.age) { ////if param == value of age in array
            result = value;
        }
    });

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});