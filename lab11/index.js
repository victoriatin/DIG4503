import MongoClient from 'mongodb';

const URL = "mongodb+srv://vtinsley:b66fn4y2hVvIVQuj@cluster0.oewwc.mongodb.net/test";

MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    // Select the database
    let database = connection.db("sample_airbnb");
     // Select the collection
    let collection = database.collection("listingsAndReviews");
     // Save the cursor
     // Search review_scores sub-field (array) for review_scores_rating using dot notation
    let cursor = collection.find({'review_scores.review_scores_rating': {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});
    // Using the cursor, access its forEach() method.
    cursor.forEach(document => {
        console.log(document.name); // For each document, only use its 'name' field (property)
    }, () => {
         // After the forEach() finishes, it will call this "endCallback" function
        connection.close(); // Close the connection.
    });
})
.catch(error => {
    // Connection failed for any number of reasons.
    console.log("Error: " + error);
});