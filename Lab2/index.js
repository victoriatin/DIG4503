const axios = require('axios');

//fetch this url
axios('https://pokeapi.co/api/v2/pokemon/zigzagoon')
//returns the 'then' method of a promise to handle the response
    .then(function (response){
        //use the data of the response object
        const pokemon = response.data;
//URL will return an object with the data on the pokemon requested
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);

    })
    .catch(function (error) {
        //handle error
        console.log("Error: " + error);
    });