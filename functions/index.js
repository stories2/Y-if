const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(function(request, response) {
 response.send("Hello from Firebase!");
});

const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors)

app.get("/keyboard", function (request, response) {

    responseMessage = {
        "type" : "buttons",
        "buttons" : [
            "뭐해?"
        ]}

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
})

app.post("/message", function (request, response) {

    responseMessage = {
        "message": {
            "text": "뭐하지?",
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "뭐해?"
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
})

app.post("/friend", function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send()
})

app.delete("/friend/:user_key", function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send()
})

app.delete("/chat_room/:user_key", function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send()
})

exports.v1 = functions.https.onRequest(app);