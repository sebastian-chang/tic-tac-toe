const store = require('../store')
const gameEvents = require('../game-logic/events')

// Sign up and sign in functions
const signUpSuccess = function () {
    $('#message').text('Successfully signed up!')
    $('.signin-view').show()
    $('.signup-view').hide()
    $('#signup').trigger('reset')
}
const signUpFailure = function () {
    $('#message').text('Sign up failed')
}
const signInSuccess = function (response) {
    $('#message').text('Successfully signed in!')
    store.user = response.user
    console.log(response.user.token)
    gameEvents.onGetGames()
    $('.new-game, .logged-in').show()
    // $('.new-game').modal('show')
    $('.signin-view').hide()
    $('#signin').trigger('reset')
}
const signInFailure = function () {
    $('#message').text('Could not log in.  Please try again.')
}
// Functions to switch between signing up and signing in
const signUpSwitch = function () {
    $('.signin-view').hide()
    $('.signup-view').show()
}
const signInSwitch = function () {
    $('.signin-view').show()
    $('.signup-view').hide()
}

// Logout functions
const logoutSuccess = function () {
    $('#message').text('Successfully logged out!')
    $('.signin-view').show()
    $('.signup-view, .game-board-view, .logged-in, .new-game, #restart, .change-password-view').hide()
}
const logoutFailure = function () {
    $('#message').text('Failed to logout.')
}

// Change password functions
const changePasswordSuccess = function () {
    $('#message').text('Password successfully changed!')
    $('.change-password-view').hide()
    $('#change-password').trigger('reset')
    if (!store.game.over) {
        $('.game-board-view, #change-password-button, #restart').show()
    }
    else {
        $('.new-game, .change-password').show()
    }
}
const changePasswordFailure = function () {
    $('#message').text('An error has occurred while attempting change your password.  Please try again.')
}
// Switch back to previous view before attempting to change password
const changePasswordSwitch = function () {
    $('.new-game, .game-board-view, #change-password-button, #restart').hide()
    $('.change-password-view').show()
}
const changePasswordCancel = function () {
    $('.change-password-view').hide()
    if (store.game) {
        $('.game-board-view, #change-password-button, #restart').show()
        // $('.new-game').show()
    }
    else {
        $('.new-game, #change-password-button').show()
    }
}

module.exports = {
    signUpFailure,
    signUpSuccess,
    signInFailure,
    signInSuccess,
    signUpSwitch,
    signInSwitch,
    logoutFailure,
    logoutSuccess,
    changePasswordFailure,
    changePasswordSuccess,
    changePasswordSwitch,
    changePasswordCancel,
}