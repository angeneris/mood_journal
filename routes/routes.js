const JournalEntry = require('./models/JournalEntry');

// POST route to add a new journal entry
app.post('/journal', async (req, res) => {
    try {
        const { title, content, emotion } = req.body;
        const newEntry = new JournalEntry({
            title,
            content,
            emotion
        });
        await newEntry.save();
        res.status(201).json({ message: 'Journal entry saved!', entry: newEntry });
    } catch (err) {
        res.status(500).json({ message: 'Error saving journal entry', error: err });
    }
});
// GET route to fetch all journal entries
app.get('/journal', async (req, res) => {
    try {
        const entries = await JournalEntry.find();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching journal entries', error: err });
    }
});
