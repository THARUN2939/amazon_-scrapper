const express = require('express');
const request = require('request-promise');
const app = express();
const PORT= 88;

app.use(express.json());
const apiKey = '3122a9294c707e5da19f7e3a475b83d6';
const baseUrl = 'http://api.scraperapi.com?api_key=${apiKey}&autoparse=true';
app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scrapper API.');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// GET product Details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
