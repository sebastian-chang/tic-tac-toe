'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')

$(() => {
  // your JS code goes here
  const restart = $('#restartButton')
  const cells = $('td')

  let clicked = 0

  cells.on("click", function () {
    if (clicked == 0) {
      $(this).text('X')
      $(this).css('color', 'blue')
      clicked++
    }
    else if (clicked == 1) {
      $(this).text('O')
      $(this).css('color', 'red')
      clicked++
    }
    else if (clicked == 2) {
      $(this).text('')
      clicked = 0
    }
    // else{
    //     clicked = 0;
    // }
  })

  restart.on('click', function() {
    cells.each(function () {
      $(this).text('')
    })
  })

  $('.signup-view').hide()
  $('.game-board-view').hide()
  $('#signup').on('submit', authEvents.onSignUp)
  $('#signin').on('submit', authEvents.onSignIn)
  $('#signup-button').on('click', authEvents.onSignUpSwitch)
  $('#signin-button').on('click', authEvents.onSignInSwitch)
})