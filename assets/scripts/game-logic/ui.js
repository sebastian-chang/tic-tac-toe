const store = require('../store')

const startNewGameSuccess = function (response) {
    $('#message').text('Let us begin!')
    $('.game-board-view, #restart').show()
    $('.new-game').hide()
    store.game = response.game
}
const startNewGameFailue = function () {
    $('#message').text('Could not start a new game.')
}

const resetGameSuccess = function() {
    $('#message').text('Game has been reset!')
}

const resetGameFailure = function() {
    $('#message').text('Game could not restart!')
}

const makeMoveSuccess = function (response) {
    $('#message').text('Nice Move!')
    store.game = response.game
}

const makeMoveFailure = function () {
    $('#message').text('Try a different square!')
}

module.exports = {
    startNewGameFailue,
    startNewGameSuccess,
    resetGameFailure,
    resetGameSuccess,
    makeMoveFailure,
    makeMoveSuccess,
}