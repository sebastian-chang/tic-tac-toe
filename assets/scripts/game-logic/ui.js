const store = require('../store')
const check = require('./game-check')
const gameEvents = require('./events')

const startNewGameSuccess = function (response) {
    $('#message').text('Let us begin!')
    $('.game-board-view, #restart').show()
    $('.new-game').hide()
    store.game = response.game
    // gameEvents.onGetGames()
    // showGamesPlayedSuccess()
}
const startNewGameFailue = function () {
    $('#message').text('Could not start a new game.')
}

const resetGameSuccess = function () {
    $('#message').text('Game has been reset!')
    $('.game-board-view, #restart').hide()
    $('.new-game').show()
}

const resetGameFailure = function () {
    $('#message').text('Game could not restart!')
}

const makeMoveSuccess = function (response) {
    $('#message').text('Nice Move!')
    store.game = response.game
    if (response.game.over) {
        $('#message').text('')
        $('.game-over-modal').modal('show')
        $('#restart').hide()
        $('.new-game').show()
    }
    // check.gameWinner()
    // console.log(store.game)
}

const makeMoveFailure = function () {
    $('#message').text('Try a different square!')
}

const clearBoard = function () {
    $('.game-board td').each(function () {
        $(this).text('')
    })
}

const showGamesPlayedSuccess = function (response) {
    const gamesPlayed = response.games.length
    $('.games-played').text('Games played ' + gamesPlayed)
    console.log(response)
    console.log('number of games ', gamesPlayed)
}
const showGamesPlayedFailure = function () {
    $('.games-played').text('There was an error getting your previous games.')
}

module.exports = {
    startNewGameFailue,
    startNewGameSuccess,
    resetGameFailure,
    resetGameSuccess,
    makeMoveFailure,
    makeMoveSuccess,
    showGamesPlayedSuccess,
    showGamesPlayedFailure,
    clearBoard,
}