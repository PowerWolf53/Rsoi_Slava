var express = require('express')
var bodyParser = require('body-parser')
var createRecord = require('./createRecord')
var readRecord = require('./readRecord')
var updateRecord = require('./updateRecord')
var deleteRecord = require('./deleteRecord')
var MongoClient = require('mongodb');

const hostname = '127.0.0.1';
const port = 3005;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')


MongoClient.connect('mongodb://localhost:27017/test?retryWrites=true&w=majority', (err, database) => {
    if (err) return console.log(err)
    db = database.db('cities')
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
})

app.post('/cities', (req, res) => {
    createRecord.create(req.body)
    return res.redirect('/cities');
})

app.get('/cities', (req, res) => {
    return readRecord.fetchAll(db, res)
})

app.put('/cities', (req, res) => {
    updateRecord.updateByName(req.body, db, res)
    return readRecord.fetchAll(db, res)
})

app.delete('/cities', (req, res) => {
    deleteRecord.deleteByName(req.body, db)
    return readRecord.fetchAll(db, res)
})