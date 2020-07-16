var squares = document.querySelectorAll('td')
var restart = document.querySelector('#restartButton')

restart.addEventListener('click', clearAll)
squares.forEach(changeState)

function changeState(currentSquare) {
    var clicked = 0

    currentSquare.addEventListener("click", function () {
        if (clicked == 0) {
            currentSquare.textContent = "X"
            currentSquare.style.color = 'blue'
            clicked++
        }
        else if (clicked == 1) {
            currentSquare.textContent = "O"
            currentSquare.style.color = 'red'
            clicked++
        }
        else if (clicked == 2) {
            currentSquare.textContent = ""
            clicked = 0
        }
        // else{
        //     clicked = 0;
        // }
    })
}

function clearAll() {
    for (i = 0; i < squares.length; i++) {
        squares[i].textContent = ''
    }
}