const path = require('path');

function MainPage(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html', 'MainPage.html')); // Виправлено шлях
    });
}
module.exports = MainPage;

