const store = require('../store')
const check = require('./game-check')

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
    $('.game-board-view').hide()
    $('.new-game').show()
}

const resetGameFailure = function() {
    $('#message').text('Game could not restart!')
}

const makeMoveSuccess = function (response) {
    $('#message').text('Nice Move!')
    store.game = response.game
    if(response.game.over){
        $('#message').text('no more moves')
    }
    // check.gameWinner()
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