const store = require('../store')

// Check to see if someone won the game
const gameWinner = function () {
    const gameBoard = store.game.cells
    const resultChecks = []

    // Create a new array with all possible winning combinations
    for (let col = 0; col < 3; col++) {
        let row = 3 * col
        resultChecks.push(gameBoard[row] + gameBoard[row + 1] + gameBoard[row + 2])
        resultChecks.push(gameBoard[col] + gameBoard[col + 3] + gameBoard[col + 6])
    }
    resultChecks.push(gameBoard[0] + gameBoard[4] + gameBoard[8])
    resultChecks.push(gameBoard[2] + gameBoard[4] + gameBoard[6])

    //  Check new array to see if there is a winner
    if (resultChecks.includes('XXX')) {
        console.log('X won')
        return true
    }
    if (resultChecks.includes('OOO')) {
        console.log('O won')
        return true
    }
    console.log(resultChecks)
    return false
}

// Check to see if the game has been completed
// First checks to see if anyone has won, checks to see if any moves remain.  
// If no moves left Cat's game
const completeGame = function () {
    if (gameWinner()) {
        console.log('we have a winner')
        return true
    }
    else {
        if (store.game.__v === 8) {
            return true
        }
        else {
            return false
        }
    }
}

module.exports = {
    completeGame,
    gameWinner,
}