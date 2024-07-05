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

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB Connected!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
