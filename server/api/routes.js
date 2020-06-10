'use strict';
module.exports = function (app) {
    let accountCtrl = require('./controllers/accountController');

    // todoList Routes
    app.route('/account')
        .get(accountCtrl.get)
        .post(accountCtrl.store);

    app.route('/account/:username')
        .get(accountCtrl.detail)
        .put(accountCtrl.update)
        .delete(accountCtrl.delete);

    let deckCtrl = require('./controllers/decksController');

    app.route('/decks')
        .get(deckCtrl.get)

    app.route('/deck/:id')
        .get(deckCtrl.detail)

    let questionCtrl = require('./controllers/questionsController');

    app.route('/questions')
        .get(questionCtrl.get)

    app.route('/questions/deck')
        .get(questionCtrl.getByDeck)
};

