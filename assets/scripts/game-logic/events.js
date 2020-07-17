const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const check = require('./game-check')

const onStartNewGame = function () {
    event.preventDefault()
    ui.clearBoard()
    let i = 0
    $('.game-board td').each(function () {
        $(this).data('index', i)
        i++
    })
    api.startNewGame()
        .then(ui.startNewGameSuccess)
        .catch(ui.startNewGameFailue)
    onGetGames()
}

const onResetGame = function () {
    api.resetGame()
        .then(ui.resetGameSuccess)
        .catch(ui.resetGameFailure)
    ui.clearBoard()
}

const onCellClick = function () {
    // Find out whose turn it is
    let clicked = store.game.__v % 2
    // Create an object of our player pick's result
    const playerMove = {
        game: {
            cell: {
                index: 0,
                value: '',
            },
            over: false,
        }
    }

    if (store.game.over) {
        $('#message').text('The game is over. Please start a new one.')
        return
    }

    // Check to see if a square is already taken up
    if ($(this).text().length === 0) {
        // If not mark square according to player's turn
        // Add results to our playerMove object
        if (clicked === 0) {
            $(this).text('X')
            $(this).css('color', 'blue')
            playerMove.game.cell.value = 'X'
            playerMove.game.cell.index = $(this).data().index
        }
        else if (clicked === 1) {
            $(this).text('O')
            $(this).css('color', 'red')
            playerMove.game.cell.value = 'O'
            playerMove.game.cell.index = $(this).data().index
        }
        // Check to see if the game is over
        // Send move to our API
        playerMove.game.over = check.completeGame(playerMove)
        api.makeMove(playerMove)
            .then(ui.makeMoveSuccess)
            .catch(ui.makeMoveFailure)
    }
    else {
        $('#message').text('Square taken.  Please pick another')
    }
}

const onGetGames = function () {
    api.getGames()
        .then(ui.showGamesPlayedSuccess)
        .catch(ui.showGamesPlayedFailure)
}


module.exports = {
    onStartNewGame,
    onCellClick,
    onResetGame,
    onGetGames,
}
