const api = require('./api')
const ui = require('./cpu-ui')
const check = require('./game-check')

// Creates a move for the computer.
const cpuMove = function () {
    let lookingForSquare = true
    const computerMove = {
        game: {
            cell: {
                index: 0,
                value: '',
            },
            over: false,
        }
    }
    // This should run until computer finds an empty square
    while (lookingForSquare) {
        // Computer picks are random no real logic
        const cpuPick = Math.floor(Math.random() * 9)
        let i = 0
        // Goes through the board finding the cell the computer 'picked'
        $('.game-board .box').each(function () {
            // Once it finds the cell it 'clicks'
            // if the cell is empty make computer move
            if ($(this).data().index === cpuPick) {
                if ($(this).text().length === 0) {
                    $(this).text('O').css('color', 'red').addClass('letter')
                    computerMove.game.cell.value = 'O'
                    computerMove.game.cell.index = $(this).data().index
                    computerMove.game.over = check.completeGame(computerMove)
                    api.makeMove(computerMove)
                        .then(ui.cpuMoveSuccess)
                        .catch(ui.cpuMoveFailure)
                    lookingForSquare = false
                }
            }
            i++
        })
    }
}

module.exports = {
    cpuMove,
}