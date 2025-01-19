    const path = require('path');

    function MainPage(app) {
        app.get('/', (req, res) => {
            res.render('MainPage'); // Без розширення файлу
        });
        
    }
    module.exports = MainPage;

