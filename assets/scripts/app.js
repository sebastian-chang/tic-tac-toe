'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game-logic/events')

$(() => {
  // your JS code goes here
  const restart = $('#restart')
  const cells = $('.game-board td')

  // Hide views
  $('.signup-view, .game-board-view, .logged-in, .new-game, #restart').hide()

  // Authorization event listeners
  $('#signup').on('submit', authEvents.onSignUp)
  $('#signin').on('submit', authEvents.onSignIn)
  $('#signup-button').on('click', authEvents.onSignUpSwitch)
  $('#signin-button').on('click', authEvents.onSignInSwitch)
  $('#logout-button').on('click', authEvents.onLogout)

  // Game event listeners
  $('#start-game').on('click', gameEvents.onStartNewGame)
  cells.on('click', gameEvents.onCellClick)
  restart.on('click', gameEvents.onResetGame)
})