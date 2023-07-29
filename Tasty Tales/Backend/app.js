// this is server file, this will have two things 1. mongoose connection, second port setup using app.listen
const express= require('express');
const bodyPaser = require('bodyParser');
const redis = require('redis');
const mongoose = require('mongoose');

app = express();
const PORT = process.env.PORT||5000;

app.use(cors());
app.use(bodyPaser.json());

// NOW the main kaam Mongodb ko connect krna
mongoose.connect('mongodb://localhost:27017/tastytales', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(()=> console.log('connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB'))

// routes wali file ko app.js me add kr rha hoon and models wali file route me use ho chuki hai.
const restaurantsRouter = require('./routes/restaurants');
const reviewsRouter = require('./routes/reviews');

app.use('/restaurants', restaurantsRouter);
app.use('/reviews', reviewsRouter);


// Start the server
app.Listen(PORT, ()=> {
    console.log('Server running on http://localhost:${PORT}');
})