const store = require('../store')

const signUpSuccess = function () {
    $('#message').text('Successfully signed up!')
    $('.signin-view').show()
    $('.signup-view').hide()
}
const signUpFailure = function () {
    $('#message').text('Sign up failed')
}

const signInSuccess = function (response) {
    $('#message').text('Successfully signed up!')
    store.user = response.user
    $('.game-board-view').show()
    $('.signin-view').hide()
}
const signInFailure = function () {
    $('#message').text('Could not log in.  Please try again.')
}

const logoutSuccess = function () {
    $('#message').text('Successfully logged out!')
    $('.signin-view').show()
    $('.signup-view').hide()
    $('.game-board-view').hide()
}
const logoutFailure = function () {
    $('#message').text('Failed to logout.')
}

const signUpSwitch = function () {
    $('.signin-view').hide()
    $('.signup-view').show()
}
const signInSwitch = function () {
    $('.signin-view').show()
    $('.signup-view').hide()
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
}