const { response } = require("express");
const Express = require("express");
const App = Express ();
const port = 3001;

//the route is '/' and the function passes parameters to request & response
App.get('/', function(request, response){
    response.send("Hello World!");
});

//use() function allows static() to serve files since static() is middleware
//static accepts as an argument a local path on the server (public) to serve files from when requested
App.use('/public', Express.static("public"));

//listen() function combines all the previous functions
//listen() on a specific port (3001) on the local computer for HTTP requests
App.listen(port, function(){
    console.log("Server running!");
})