**Mood Journal Feature (In Development)**

This is a web based application designed to help users track their emotions and thoughts through daily journal entries. The app analyzes the sentiment of each journal entry and categorizes it as positive, neutral, or negative based on the content, giving users insight into their mood patterns. This willbe a feature in an upcoming application. 

**Features**
Current Functionality
Text Entry: Users can write and submit journal entries directly from the app interface.
Sentiment Analysis: Each journal entry undergoes sentiment analysis using the Sentiment.js library. The app categorizes the mood as positive, neutral, or negative based on the sentiment score.
MongoDB Integration: Journal entries, including title, content, and detected emotion, are saved to a MongoDB database.

**Tech Stack**
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB
Sentiment Analysis: Sentiment.js
Other: Mongoose for database interaction, dotenv for environment variable management

Simple User Interface 
![image](https://github.com/user-attachments/assets/4c291f1b-800d-4441-b66e-332ddc3ceb9e)
If user tried to submit an empty entry, a pop up displays a warning message to nudge the user to complete their journal entry. 
After user submits their journal entry, the contenteditable div is cleared and a sucess message is displayed and the title, content, and emotion of the journal entry is sent to the mongoDB collection using mongoose. 


The journal entry is saved with the date of entry. 


Positive message example:
![image](https://github.com/user-attachments/assets/93837c3b-51ac-4b9d-9d6f-b926b2c67e34)

Negative message example:
![image](https://github.com/user-attachments/assets/c5916c85-0c8e-4c6e-b667-b74397a8869c)




**Future Features**

User Authentication: Add a login system so users can manage their personal journal entries.
Mood History Visualization: Implement visualizations and share each word of the entry that influenced the emotion label to help users visualize their mood over time.
Emotion Categorization: Provide more detailed emotion categories (e.g., anxious, excited, sadness, anger).
Entry Search: Allow users to search their past entries by keywords or date.
Mobile Responsiveness: Allow for a design and functionality for mobile users.



