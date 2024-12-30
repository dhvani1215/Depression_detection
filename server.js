const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3019;

app.use(express.static(__dirname)); // Serve static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Handle JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Define the User schema with additional fields
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String }, // Company name
    email: { type: String, required: true },
    phone: { type: String }, // Phone number
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
});

// Define the Users model
const Users = mongoose.model("data", userSchema);

// Serve the contact form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle form submission
app.post('/post', async (req, res) => {
    try {
        const { name, company, email, phone, message } = req.body;

        // Create a new user from the form data
        const user = new Users({ name, company, email, phone, message });

        // Save the user to the database
        await user.save();
        console.log(user);

        // Send a success response or redirect to a success page
        res.status(200).sendFile(path.join(__dirname, 'index.html'));
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('An error occurred');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
