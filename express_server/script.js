const express = require('express');
const app = express();
var router = express.Router();
//app.use(express.json);
var bodyParser = require("body-parser");
app.use(bodyParser());
const personDetails = require('./personDetails.json');
app.get('/home', (req, res) => {
    console.log(res.statusCode)
    res.send('Welcome to REST API Demo using Person Details');
})

app.get('/home/personDetails', (req, res) => {
    res.send(personDetails);
})

app.get('/home/personDetails/:id', (req, res) => {
    let person = undefined
    person = checkId(req.params.id)
    if (person != undefined) {
        res.send(person);
    } else {
        res.send("Invalid ID");
    }
})
function checkId(idFromUser) {
    person = undefined
    for (var i = 0; i <= personDetails.length; i++) {
        if ((parseInt(idFromUser) <= personDetails.length) && (parseInt(idFromUser) > 0)) {
            if (personDetails[i].id == parseInt(idFromUser)) {
                person = personDetails[i];
                break;
            }
        }
    }
    return person;

}
app.post('/home/personDetails', (req, res) => {
    const error = validateId(req.body)
    if (error) {
        res.send("Check you ID")
    } else {
        const person = {
            id: req.body.id,
            name: req.body.name,
            designation: req.body.designation,
            city: req.body.city
        }
        personDetails.push(person);
        res.send(person);
    }
})

function validateId(person) {
    let idCount = personDetails.length;
    if (idCount < parseInt(person.id)) {
        return false
    } else {
        return true
    }
}
app.put('/home/personDetails/:id', (req, res) => {
    let person = personDetails.find(personReference => personReference.id === parseInt(req.params.id));
    if (!person) {
        res.send("Invalid ID")
    } else {
        person.name = req.body.name;
        person.designation = req.body.designation;
        person.city = req.body.city;
        res.send(person)
    }
})
app.delete('/home/personDetails/:id', (req, res) => {
    let myPromise = new Promise(function (myResolve, myReject) {
        let person = personDetails.find(personReference => personReference.id === parseInt(req.params.id));
        if (!person) {
            myReject("Invalid ID");
        } else {
            const index = personDetails.indexOf(person);
            personDetails.splice(index, 1);
            myResolve(person)
        }
    })
    myPromise.then(function (value) {
        deleteDisplay(value)
    }, function (error) {
        deleteDisplay(error)
    })
    function deleteDisplay(data) {
        res.send(data)
    }
})


const port = 9000;
app.listen(port, () => console.log("Server started"))
module.exports = { router, app, validateId };
