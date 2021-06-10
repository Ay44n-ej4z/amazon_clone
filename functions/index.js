const functions = require("firebase-functions");

const express = require("express")
const cors = require("cors");
const { request } = require("express");

const stripe = require("stripe")(
    "sk_test_51J0iB8SIAgYbxje9C4WTgY8CIqy0pzXUtsSIrFKM1FBgcXgnpRd0EILDViwEQDjfwTM1q2pehw8iCGb0mHc5OhNZ00RQg5HuFi")

 const app = express()
 

 app.use(cors({origin: true}));
 app.use(express.json());




 app.get('/',(req, res) => res.status(200).send('hello world'))

 app.post('/payment/create', async (request, response) => {
     const total = request.query.total
     console.log('Payemnt request Recieved', total);
     const paymentIntent =  await stripe.paymentIntent.create({
         amount: total,
         currency: "usd",
     }) 
     respons.status(201).send({
         clientSecret: paymentIntent.clientSecret,
     })
    })

 exports.api = functions.https.onRequest(app)

//  http://localhost:5001/full-auth-9bf6a/us-central1/api