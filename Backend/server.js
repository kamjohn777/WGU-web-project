const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 4000;

const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../Frontend/public')));

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, '../Frontend/public')));
    app.use('/assets', express.static(path.join(__dirname, '../Frontend/assets')));    res.sendFile(path.join(__dirname, '../Frontend/public/html/home.html'));
})

app.get('/landingPage', (req,res) => {
    app.use(express.static(path.join(__dirname, '../Frontend/public')));
    res.sendFile(path.join(__dirname, '../Frontend/public/html/landingPage.html'));
})

app.get('/about', (req, res) => {
    app.use(express.static(path.join(__dirname, '../Frontend/public')));
    res.sendFile(path.join(__dirname, '../Frontend/public/html/aboutPage.html'));
})

app.get('/galleryPage', (req,res) => {
    app.use(express.static(path.join(__dirname, '../Frontend/public')));
    res.sendFile(path.join(__dirname, '../Frontend/public/html/galleryCustom.html'));
})

app.get('/shopping', (req, res) => {
    app.use(express.static(path.join(__dirname, '../Frontend/public')));
    res.sendFile(path.join(__dirname, '../Frontend/public/html/shoppingGallery.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})