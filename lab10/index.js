import Express from "express";
import fs from "fs";
import cors from "cors";

const App = Express();
const port = 3010;
App.use(cors());


// stops all other processes while it reads the content of the file its directed to
let fileContents = fs.readFileSync("database.json");

// turning a string into a JSON object (turn fileContents variable into a JSON object)
let database = JSON.parse(fileContents);

//Change the server code to serve static files from "client/build" instead of "public"
App.use("/", Express.static("client/build"));

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
App.get('/ages/:age', (req, res) => {
    // If search cannot be found, the route should respond with a JSON object, {error: "not found"}
    let result = {"error": "not found"};

    /* use the forEach method to return a JSON object, 
    {name: "name", age: #}, for exact matches of an age found in database.json */
    // run function for each value in the array
    database.forEach((value) => {
        if(req.params.age == value.age) { ////if param == value of age in array
            result = value;
        }
    });

    res.json(result);
});


// Create a GET route called employees/:location where location is a route parameter. 
App.get('/locations/:location', (req, res) => {
    // If the location is not found, the route should respond with a JSON object, {error: "not found"}
    let result = {"error": "not found"};

    /* use the forEach method to return a JSON object with the property, */
    // run function for each value in the array
    database.forEach((value) => {
        if(req.params.location == value.location) { //if param == value of location in array
            result = value;
        }
    });

    res.json(result);
});


// Create a POST request with the route employee/:name/:age
// Push the user input to the array in database.json 
App.post('/employee/:name/:age/:location', (req, res) => {
    let result = {
        "name": req.params.name,
        "age": parseInt(req.params.age), //parsing string
        "location": req.params.location
    };

    database.push(result); //push to database the value of result
                    //file writing on, all properties included, how much space to add for readability purposes
    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});