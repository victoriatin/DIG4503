import Express from 'express';
const App = Express();
const port = 3010;


//Create at least two dynamic routes that return a string and the request parameter

App.get('/people/:id', (req, res) => {
    res.send("The user ID you have requested is " + req.params.id);
});

App.get('/user/:age', (req, res) => {
    res.send("The user's age is " + req.params.age);
});

App.get('/fav/:animal', (req, res) => {
    res.send("The user's favorite animal is a " + req.params.animal);
});

App.listen(port, () => {

});