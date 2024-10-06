const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve an HTML form at the root URL
app.get('/', (req, res) => {
    res.send(`
        <form action="/hello" method="POST">
            <label for="name">Enter your name:</label>
            <input type="text" id="name" name="name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle the POST request to /hello
app.post('/hello', (req, res) => {
    const name = req.body.name; // Get the name from the form data
    res.send(`Hello, ${name}.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
