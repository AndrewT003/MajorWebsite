const express = require('express');
const session = require('express-session');
const path = require('path');
const mailService = require("./js/mailService"); // Імпортуємо функцію для обробки email

const ChangeOrderImg = require("./js/changeFotoOrder");
const mainPage = require('./js/mainPage');
const { Peretiazka, DoorCarts, PeretiazkaKerma, PeretiazkaSteli, InstalChohli, ChohliCreation, TransmitionPeretiazka, RestavrationSeatsParalonu,
    PeretiazkaPidlokitnikiv, RestavrationMebliv, EVACarpet, CreationNakidki } = require('./js/offers');

const EditAdmin = require('./js/admineditprices');
const Admin = require('./js/admin');
const startApp = require('./js/database');

const app = express();
const PORT = 3000;

// Вказуємо шлях до папки, де знаходяться шаблони
app.set('views', path.join(__dirname, 'public', 'view'));  // Ваша папка views

// Встановлюємо EJS як шаблонізатор
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));  // Для доступу до статичних файлів

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

app.use(express.static(path.join(__dirname, 'js')));

// Middleware для перевірки авторизації
function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next(); // Користувач авторизований
    }
    res.redirect('/admin'); // Якщо не авторизований, перенаправляємо на сторінку входу
}

// Додаємо перевірку авторизації на маршрут редагування фото
app.get('/admin/edit/photo', isAuthenticated, (req, res) => {
    res.render('changeOrderImg');
});

ChangeOrderImg(app);
mainPage(app);
Peretiazka(app);
DoorCarts(app);
Admin(app);
startApp();
PeretiazkaKerma(app);
PeretiazkaSteli(app);
InstalChohli(app);
ChohliCreation(app);
TransmitionPeretiazka(app);
RestavrationSeatsParalonu(app);
PeretiazkaPidlokitnikiv(app);
RestavrationMebliv(app);
EVACarpet(app);
CreationNakidki(app);
EditAdmin(app);
mailService(app);

app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`);
});
