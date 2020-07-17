const config = require('../config')
const store = require('../store')

const startNewGame = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games',
        method: 'POST',
    })
}

const resetGame = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games/' + store.game._id,
        method: 'DELETE',
    })
}

const makeMove = function (move) {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games/' + store.game._id,
        method: 'PATCH',
        data: move,
    })
}

const getGames = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games',
        method: 'GET',
    })
}

module.exports = {
    startNewGame,
    resetGame,
    makeMove,
    getGames,
}