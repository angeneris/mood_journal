// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const journalRoutes = require('./routes/routes'); // Import the routes from the routes folder

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json()); // This middleware is essential for parsing JSON bodies
app.use(express.static('public')); // Serve static files from a public directory

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Journal App is running' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Use the journal routes for handling requests to /journal
app.use('/journal', journalRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Optional: handle unhandled rejections and exceptions
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
