const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 4000;
const dataFile = 'data.json';

async function readData() {
    try {
        const data = await fs.readFile(dataFile, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading data:", err);
        return [];
    }
}

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /items to view the item list.');
});

// GET endpoint to read all items
app.get('/items', async (req, res) => {
    const data = await readData();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
