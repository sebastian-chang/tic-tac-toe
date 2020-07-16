const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.signUp(formData)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.signIn(formData)
        .then(ui.signInSuccess)
        .catch(ui.signInFailure)
}

const onSignUpSwitch = function (event) {
    event.preventDefault()
    ui.signUpSwitch()
}
const onSignInSwitch = function (event) {
    event.preventDefault()
    ui.signInSwitch()
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignUpSwitch,
    onSignInSwitch,
}