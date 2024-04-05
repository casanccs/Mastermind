let answer = ['b', 'p', 'r', 'r']
let guess = ['n', 'n', 'n', 'n']

let col = 1
let row = 1

const arrow = document.querySelector('.arrow')
arrow.style.top = '97%'
arrow.style.left = '12.5%'

const gr1c1 = document.querySelector('.gr1 .gc1')
const gr1c2 = document.querySelector('.gr1 .gc2')
const gr1c3 = document.querySelector('.gr1 .gc3')
const gr1c4 = document.querySelector('.gr1 .gc4')
const gr1c5 = document.querySelector('.gr1 .gc5')
const gr1c6 = document.querySelector('.gr1 .gc6')

const gr2c1 = document.querySelector('.gr2 .gc1')
const gr2c2 = document.querySelector('.gr2 .gc2')
const gr2c3 = document.querySelector('.gr2 .gc3')
const gr2c4 = document.querySelector('.gr2 .gc4')
const gr2c5 = document.querySelector('.gr2 .gc5')
const gr2c6 = document.querySelector('.gr2 .gc6')

const gr3c1 = document.querySelector('.gr3 .gc1')
const gr3c2 = document.querySelector('.gr3 .gc2')
const gr3c3 = document.querySelector('.gr3 .gc3')
const gr3c4 = document.querySelector('.gr3 .gc4')
const gr3c5 = document.querySelector('.gr3 .gc5')
const gr3c6 = document.querySelector('.gr3 .gc6')

const gr4c1 = document.querySelector('.gr4 .gc1')
const gr4c2 = document.querySelector('.gr4 .gc2')
const gr4c3 = document.querySelector('.gr4 .gc3')
const gr4c4 = document.querySelector('.gr4 .gc4')
const gr4c5 = document.querySelector('.gr4 .gc5')
const gr4c6 = document.querySelector('.gr4 .gc6')

const gr5c1 = document.querySelector('.gr5 .gc1')
const gr5c2 = document.querySelector('.gr5 .gc2')
const gr5c3 = document.querySelector('.gr5 .gc3')
const gr5c4 = document.querySelector('.gr5 .gc4')
const gr5c5 = document.querySelector('.gr5 .gc5')
const gr5c6 = document.querySelector('.gr5 .gc6')

const gr6c1 = document.querySelector('.gr6 .gc1')
const gr6c2 = document.querySelector('.gr6 .gc2')
const gr6c3 = document.querySelector('.gr6 .gc3')
const gr6c4 = document.querySelector('.gr6 .gc4')
const gr6c5 = document.querySelector('.gr6 .gc5')
const gr6c6 = document.querySelector('.gr6 .gc6')

const gr7c1 = document.querySelector('.gr7 .gc1')
const gr7c2 = document.querySelector('.gr7 .gc2')
const gr7c3 = document.querySelector('.gr7 .gc3')
const gr7c4 = document.querySelector('.gr7 .gc4')
const gr7c5 = document.querySelector('.gr7 .gc5')
const gr7c6 = document.querySelector('.gr7 .gc6')

const gr8c1 = document.querySelector('.gr8 .gc1')
const gr8c2 = document.querySelector('.gr8 .gc2')
const gr8c3 = document.querySelector('.gr8 .gc3')
const gr8c4 = document.querySelector('.gr8 .gc4')
const gr8c5 = document.querySelector('.gr8 .gc5')
const gr8c6 = document.querySelector('.gr8 .gc6')

const gr9c1 = document.querySelector('.gr9 .gc1')
const gr9c2 = document.querySelector('.gr9 .gc2')
const gr9c3 = document.querySelector('.gr9 .gc3')
const gr9c4 = document.querySelector('.gr9 .gc4')
const gr9c5 = document.querySelector('.gr9 .gc5')
const gr9c6 = document.querySelector('.gr9 .gc6')

const gr0c1 = document.querySelector('.gr10 .gc1')
const gr0c2 = document.querySelector('.gr10 .gc2')
const gr0c3 = document.querySelector('.gr10 .gc3')
const gr0c4 = document.querySelector('.gr10 .gc4')
const gr0c5 = document.querySelector('.gr10 .gc5')
const gr0c6 = document.querySelector('.gr10 .gc6')
const gmatrix = [
    [gr1c1, gr1c2, gr1c3, gr1c4, gr1c5, gr1c6],
    [gr2c1, gr2c2, gr2c3, gr2c4, gr2c5, gr2c6],
    [gr3c1, gr3c2, gr3c3, gr3c4, gr3c5, gr3c6],
    [gr4c1, gr4c2, gr4c3, gr4c4, gr4c5, gr4c6],
    [gr5c1, gr5c2, gr5c3, gr5c4, gr5c5, gr5c6],
    [gr6c1, gr6c2, gr6c3, gr6c4, gr6c5, gr6c6],
    [gr7c1, gr7c2, gr7c3, gr7c4, gr7c5, gr7c6],
    [gr8c1, gr8c2, gr8c3, gr8c4, gr8c5, gr8c6],
    [gr9c1, gr9c2, gr9c3, gr9c4, gr9c5, gr9c6],
    [gr0c1, gr0c2, gr0c3, gr0c4, gr0c5, gr0c6],
]

const cr1c1 = document.querySelector('.cr1 .cc1')
const cr1c2 = document.querySelector('.cr1 .cc2')
const cr1c3 = document.querySelector('.cr1 .cc3')
const cr1c4 = document.querySelector('.cr1 .cc4')
const cr1c5 = document.querySelector('.cr1 .cc5')
const cr1c6 = document.querySelector('.cr1 .cc6')

const blue = document.querySelector('.blue')
blue.addEventListener('click', clickBlue)
const purple = document.querySelector('.purple')
purple.addEventListener('click', clickPurple)
const red = document.querySelector('.red')
red.addEventListener('click', clickRed)

addEventListener('keypress', function (e) {
    if (e.key == '1') {
        clickBlue()
    }
    if (e.key == '2') {
        clickPurple()
    }
    if (e.key == '3') {
        clickRed()
    }
    if (e.key == 'Enter') {
        submit()
    }
})

// gr1c5.style.display = 'none'
// gr1c6.style.display = 'none'
// cr1c5.style.display = 'none'
// cr1c6.style.display = 'none'

function submit(){
    if (guess[0] == answer[0]) {
        cr1c1.style.backgroundColor = 'white'
    }
    else if (answer.includes(guess[0])){
        cr1c1.style.backgroundColor = 'black'
    }
    if (guess[1] == answer[1]) {
        cr1c2.style.backgroundColor = 'white'
    }
    else if (answer.includes(guess[1])){
        cr1c2.style.backgroundColor = 'black'
    }
    if (guess[2] == answer[2]) {
        cr1c3.style.backgroundColor = 'white'
    }
    else if (answer.includes(guess[2])){
        cr1c3.style.backgroundColor = 'black'
    }
    if (guess[3] == answer[3]) {
        cr1c4.style.backgroundColor = 'white'
    }
    else if (answer.includes(guess[3])){
        cr1c4.style.backgroundColor = 'black'
    }
}

function clickRed(){
    guess[col-1] = 'r'
    if (col == 1 && row == 1) {
        gr1c1.style.backgroundColor = 'red'
        col += 1
        return
    }
    if (col == 2 && row == 1) {
        gr1c2.style.backgroundColor = 'red'
        col += 1
        return
    }
    if (col == 3 && row == 1) {
        gr1c3.style.backgroundColor = 'red'
        col += 1
        return
    }
    if (col == 4 && row == 1) {
        gr1c4.style.backgroundColor = 'red'
        col += 1
        return
    }
    if (col == 5 && row == 1) {
        gr1c5.style.backgroundColor = 'red'
        col += 1
        return
    }
    if (col == 6 && row == 1) {
        gr1c6.style.backgroundColor = 'red'
        col = 1
        return
    }
}

function clickPurple(){
    guess[col-1] = 'p'
    if (col == 1 && row == 1) {
        gr1c1.style.backgroundColor = 'purple'
        col += 1
        return
    }
    if (col == 2 && row == 1) {
        gr1c2.style.backgroundColor = 'purple'
        col += 1
        return
    }
    if (col == 3 && row == 1) {
        gr1c3.style.backgroundColor = 'purple'
        col += 1
        return
    }
    if (col == 4 && row == 1) {
        gr1c4.style.backgroundColor = 'purple'
        col += 1
        return
    }
    if (col == 5 && row == 1) {
        gr1c5.style.backgroundColor = 'purple'
        col += 1
        return
    }
    if (col == 6 && row == 1) {
        gr1c6.style.backgroundColor = 'purple'
        col = 1
        return
    }
}

function clickBlue(){
    guess[col-1] = 'b'
    if (col == 1 && row == 1) {
        gr1c1.style.backgroundColor = 'blue'
        col += 1
        return
    }
    if (col == 2 && row == 1) {
        gr1c2.style.backgroundColor = 'blue'
        col += 1
        return
    }
    if (col == 3 && row == 1) {
        gr1c3.style.backgroundColor = 'blue'
        col += 1
        return
    }
    if (col == 4 && row == 1) {
        gr1c4.style.backgroundColor = 'blue'
        col += 1
        return
    }
    if (col == 5 && row == 1) {
        gr1c5.style.backgroundColor = 'blue'
        col += 1
        return
    }
    if (col == 6 && row == 1) {
        gr1c6.style.backgroundColor = 'blue'
        col = 1
        return
    }
}