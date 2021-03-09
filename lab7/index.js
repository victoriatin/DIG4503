import Express from "express";
const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];
// Create a GET route called people/:person  where person is a route parameter. 
App.get('/people/:person', (req, res) => {
    let person = req.params.person;
    /* Should return a JSON object with the property, {name: "name"}, 
    for exact matches of a name found in the array names. */
    if (names.includes(person)){
        res.json({name: person});
    } else {
        /*If the name is not found, 
        the route should respond with a JSON object, {name: "not found"} */
            res.json({ name: "not found" });
    }

});

//Create a GET route called search/:name  where name is a route parameter. 
App.get('/search/:name', (req, res) => {
    //include name of array, filter, a function taking the paramater string
    //return an array with the strings that include a request parameter called name
    //long form: names.filter(function(str){return.str.includes(req.params.name)});
    const result = names.filter(str => str.includes(req.params.name));
    /* Should return a JSON object, {search: [names]}, 
    based on if the route parameter can be found in the string of the name. */
        if (result != 0) {
            res.json({ search: result });
        }  else {
  /* If search cannot be found, 
    the route should respond with a JSON object, {search: "not found"} */
                res.json({ search: "not found" });
            }
});

App.listen(port, () => {

});