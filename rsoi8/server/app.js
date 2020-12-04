// npm install cors express
//  node app.js
import express from 'express'
import cors from 'cors'
import fs from 'fs'
import bodyParser from 'body-parser'
import EmployeeDto from './employeeDto.js'

const hostname = '127.0.0.1';
const port = 3005;

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/employees', (req, res) => {
    let result = {
        txt: fs.readFileSync('./resource/employees.txt', "utf8", function(err, data) {}),
        xml: fs.readFileSync('./resource/employees.xml', "utf8", function(err, data) {})
    }
    return res.send(result);
});

app.post('/employees', (req, res) => {
    let em = Object.setPrototypeOf(req.body, EmployeeDto.prototype)
    fs.appendFile('./resource/employees.txt', "\r\n" + em.about, function(err) {});
    fs.appendFile('./resource/employees.txt', "\r\n" + em.position, function(err) {});
    fs.appendFile('./resource/employees.txt', "\r\n" + em.email, function(err) {});
    fs.appendFile('./resource/employees.txt', "\r\n" + em.married, function(err) {});
    fs.appendFile('./resource/employees.txt', "\r\n" + em.ownCar, function(err) {});

    fs.appendFileSync('./resource/employees.xml', "\r\n\n<employee>\r\n\t<about>" + em.about + "</about>", function(err) {});
    fs.appendFileSync('./resource/employees.xml', "\r\n\t<position>" + em.position + "</position>", function(err) {});
    fs.appendFileSync('./resource/employees.xml', "\r\n\t<email>" + em.email + "</email>", function(err) {});
    fs.appendFileSync('./resource/employees.xml', "\r\n\t<married>" + em.married + "</married>", function(err) {});
    fs.appendFileSync('./resource/employees.xml', "\r\n\t<owncar>" + em.ownCar + "</owncar>", function(err) {});
    fs.appendFileSync('./resource/employees.xml', "\r\n</employee>", function(err) {});
    return res.send('Successfully added data!');
});