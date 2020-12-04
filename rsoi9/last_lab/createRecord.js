var MongoClient = require('mongodb');
const uri = "mongodb://localhost:27017/test?retryWrites=true&w=majority";

var create = (body) => {
    MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log("Connection failed for some reason");
        }
        const db = client.db('cities')
        const quotesCollection = db.collection('cities')
        quotesCollection.insertOne(body)
        console.log("Connection established - All well");
    });

}

exports.create = create