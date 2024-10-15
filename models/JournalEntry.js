// models/JournalEntry.js
const mongoose = require('mongoose');

const JournalEntrySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    emotion: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, { collection: 'entries' }); // Explicitly define the collection name

module.exports = mongoose.model('JournalEntry', JournalEntrySchema);
