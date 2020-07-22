const store = require('../store')

// Computer makes a move
const cpuMoveSuccess = function (response) {
    store.game = response.game
    // Checking to see who just made a move
    if (store.game.__v % 2 === 1) {
        $('#message').text('Nice Move O!  Computer has made its move').removeClass('error')
    }
    else {
        $('#message').text('Nice Move X!  Computer has made its move').removeClass('error')
    }
    // Checks to see if the game is over
    if (response.game.over) {
        $('#message').text('').removeClass('error')
        $('.game-over-modal').modal('show')
        $('.restart').hide()
        $('.new-game').show()
    }
}

// This should never run as square checking is handled in cpu-events
// prior to calling the api
const cpuMoveFailure = function () {
    $('#message').text('Try a different square!').addClass('error')
}

module.exports = {
    cpuMoveFailure,
    cpuMoveSuccess,
}