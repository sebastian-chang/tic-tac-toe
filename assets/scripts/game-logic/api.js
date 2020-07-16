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
    console.log('this is my move ', move)
    console.log('this ist the game id ', store.game._id)
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games/' + store.game._id,
        method: 'PATCH',
        data: move,
    })
}

module.exports = {
    startNewGame,
    resetGame,
    makeMove,
}