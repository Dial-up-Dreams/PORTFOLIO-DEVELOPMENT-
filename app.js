const express = require('express');
//const mysql = require('mysql2');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images'); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storage});


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: false
}))


app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/AboutMe', (req, res) => {
    res.render('AboutMe');
});

app.get('/Contact', (req, res) => {
    res.render('Contact');
});

app.get('/Portfolio', (req, res) => {
    res.render('Portfolio');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`)); 