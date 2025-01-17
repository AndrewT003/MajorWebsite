const express = require('express');
const session = require('express-session');
const path = require('path');


const mainPage = require('./js/mainPage');
const { Peretiazka, DoorCarts,PeretiazkaKerma,PeretiazkaSteli } = require('./js/offers');
const Admin = require('./js/admin');
const startApp = require('./js/database');

const app = express();
const PORT = 3000;

// Middleware для обробки JSON і сесій
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'yourSecretKey',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    })
);

// Підключення статичних файлів
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'js')));


mainPage(app);
Peretiazka(app);
DoorCarts(app);
Admin(app);
startApp();
PeretiazkaKerma(app);
PeretiazkaSteli(app);


app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`);
});
