// connecting MongoDB
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const mongoURI = 'mongodb+srv://harshitshah1605:4311@harshitdb.wtprwst.mongodb.net/?retryWrites=true&w=majority&appName=harshitDB';

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } 
  catch (err) {
    console.error('MongoDB connection failed:', err);
  }
}

connectDB();

// Creating a Schema
const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },

    product_price : {
        type : String,
        required : true 
    },

    isInStock : {
        type : Boolean,
        required : true
    },

    category : {
        type : String,
        required : true
    }
})

// Define a simple route
app.get('/', (req, res) => {
  res.send('<h1>Hello, MongoDB Connected!</h1>');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

