const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public')); // Serve static files from a public directory

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Journal App is running' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Optional: handle unhandled rejections and exceptions
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    // Optionally shut down the server here if needed
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Optionally shut down the server here if needed
});
