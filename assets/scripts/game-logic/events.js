const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onStartNewGame = function () {
    let i = 0
    $('.game-board td').each(function() {
        $(this).data('index', i)
        i++
    })
    event.preventDefault()
    api.startNewGame()
        .then(ui.startNewGameSuccess)
        .catch(ui.startNewGameFailue)
}

const onCellClick = function () {
    let clicked = store.game.__v % 2
    const playerMove = {
        game: {
            cell: {
                index: 0,
                value: '',
            },
            over: false,
        }
    }

    if ($(this).text().length === 0) {
        if (clicked == 0) {
            $(this).text('X')
            $(this).css('color', 'blue')
            playerMove.game.cell.value = 'X'
            playerMove.game.cell.index = $(this).data().index
        }
        else if (clicked == 1) {
            $(this).text('O')
            $(this).css('color', 'red')
            playerMove.game.cell.value = 'O'
            playerMove.game.cell.index = $(this).data().index
        }
        // else if (clicked == 2) {
        //     $(this).text('')
        //     clicked = 0
        // }
        $('#message').text('')
        api.makeMove(playerMove)
            .then(ui.makeMoveSuccess)
            .catch(ui.makeMoveFailure)
    }
    else {
        $('#message').text('Square taken.  Please pick another')
    }
}

const onResetGame = function () {
    api.resetGame()
        .then(ui.resetGameSuccess)
        .catch(ui.resetGameFailure)
    $('.game-board td').each(function () {
        $(this).text('')
    })
}

module.exports = {
    onStartNewGame,
    onCellClick,
    onResetGame,
}
