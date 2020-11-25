// Selecting the element with class .msg
let theMessage = document.querySelector('.msg')

// Selecting the element with class .face for dice 1.
let faceOne = document.querySelector('.dice-one .face')

// Selecting the element with class .face for dice 2.
let faceTwo = document.querySelector('.dice-two .face')

let colorCodes = {
    success: '#9ACD32',
    danger: '#ff5533',
    primary: '#E0FFFF'
}

// Function rollTheDice that will execute when
// the 'click' event will be fired.
let rollTheDice = function () {

    // Getting the random number for dice 1.
    let diceOne = getRandomDiceRoll()

    // Getting the random number for dice 2.
    let diceTwo = getRandomDiceRoll()

    // Getting the sum of both the random numbers obtained.
    let finalNumber = diceOne + diceTwo

    // Declaring a variable that will store the messages
    // to be displayed as per the rolls outcome.
    let rollName = ''

    // Looping through the addition of random numbers of two dices.
    if (finalNumber === 2 || finalNumber === 3 || finalNumber === 12) {

        // Setting the background color as per the
        // category of outcome.
        theMessage.setAttribute(`style`, `background-color: ${colorCodes.danger}`)

        if (finalNumber === 2) {
            rollName = 'Snake Eyes'
        } else if (finalNumber === 3) {
            rollName = 'Ace Deuce'
        } else {
            rollName = 'Boxcars or Midnight'
        }

    } else if (finalNumber === 7 || finalNumber === 11) {

        // Setting the background color as per the
        // category of outcome.
        theMessage.setAttribute(`style`, `background-color: ${colorCodes.success}`)

        if (finalNumber === 7) {
            rollName = 'Natural or Seven Out'
        } else {
            rollName = 'Yo (Yo-level)'
        }

    } else {

        // Setting the background color as per the
        // category of outcome.
        theMessage.setAttribute(`style`, `background-color: ${colorCodes.primary}`)

        if (finalNumber === 4) {

            if (diceOne === 1 || diceTwo === 1) {
                rollName = 'Easy Four'
            } else {
                rollName = 'Hard Four'
            }
        } else if (finalNumber === 5) {
            rollName = 'Five (Fever Five)'
        } else if (finalNumber === 6) {
            if (diceOne === 1 || diceTwo === 1) {
                rollName = 'Easy Six'
            } else if (diceOne === 2 || diceTwo === 2) {
                rollName = 'Easy Six'
            } else {
                rollName = 'Hard Six'
            }
        } else if (finalNumber === 8) {
            if (diceOne === 2 || diceTwo === 2) {
                rollName = 'Easy Eight'
            } else if (diceOne === 3 || diceTwo === 3) {
                rollName = 'Easy Eight'
            }
            else {
                rollName = 'Hard Eight'
            }
        } else if (finalNumber === 9) {
            rollName = 'Nine (Nina)'
        } else {
            if (diceOne === 4 || diceTwo === 4) {
                rollName = 'Easy Ten'
            } else {
                rollName = 'Hard Ten'
            }
        }

    }

    // Updating the final message.
    theMessage.textContent = `You rolled : ${rollName}`


    // Updating the "src" attribute of selected element for dice 1.
    faceOne.setAttribute('src', `img/dice${diceOne}.svg`)

    // Updating the "alt" attribute of selected element for dice 1.
    faceOne.setAttribute('alt', `Rolled ${diceOne}`)



    // Updating the "src" attribute of selected element for dice 2.
    faceTwo.setAttribute('src', `img/dice${diceTwo}.svg`)

    // Updating the "alt" attribute of selected element for dice 2.
    faceTwo.setAttribute('alt', `Rolled ${diceTwo}`)

}

// Selecting the element with class .roll.
let theButton = document.querySelector('.roll')

// Using 'click' event to call the function rollTheDice.
theButton.addEventListener(`click`, rollTheDice)