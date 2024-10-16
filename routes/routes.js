const express = require('express');
const router = express.Router();
const JournalEntry = require('../models/JournalEntry');
const Sentiment = require('sentiment'); // Import sentiment analysis library

// Middleware for logging requests to /journal
router.use((req, res, next) => {
    console.log(`Received a ${req.method} request to /journal`);
    next(); // Pass control to the next middleware or route handler
});

// POST route to add a new journal entry
router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;

        // Ensure title and content are received
        console.log('Title:', title);
        console.log('Content:', content);

        // Run sentiment analysis on the content
        const sentiment = new Sentiment();
        const analysis = sentiment.analyze(content);
        let emotion = 'neutral'; // Default emotion

        // Log the sentiment analysis result
        console.log('Sentiment Analysis Result:', analysis);

        // Assign emotion based on sentiment score
        if (analysis.score > 0) {
            emotion = 'positive'; // Positive sentiment
        } else if (analysis.score < 0) {
            emotion = 'negative'; // Negative sentiment
        }

        // Log the detected emotion for debugging
        console.log('Detected Emotion:', emotion);

        // Create a new journal entry with detected emotion
        const newEntry = new JournalEntry({ title, content, emotion });

        // Log the new journal entry before saving
        console.log('New Journal Entry:', newEntry);

        // Save the new entry to the database
        await newEntry.save();

        // Respond with the saved entry
        res.status(201).json({ message: 'Journal entry saved!', entry: newEntry });
    } catch (err) {
        // Log the error for debugging
        console.error('Error while saving journal entry:', err);
        
        res.status(500).json({ message: 'Error saving journal entry', error: err });
    }
});

module.exports = router;
