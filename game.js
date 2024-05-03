let answer = ['b', 'p', 'r', 'r', 'n', 'n']
let guess = ['n', 'n', 'n', 'n', 'n', 'n']

let col = 0
let row = 0

let dif = 'easy'

const arrow = document.querySelector('.arrow')
arrow.style.top = '97%'
arrow.style.left = '12.5%'

const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')
const hard = document.querySelector('.hard')

easy.addEventListener('click', function () {
    dif = 'easy'
    resetgame()
})
medium.addEventListener('click', function () {
    dif = 'medium'
    resetgame()
})
hard.addEventListener('click', function () {
    dif = 'hard'
    resetgame()
})

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

const cr2c1 = document.querySelector('.cr2 .cc1')
const cr2c2 = document.querySelector('.cr2 .cc2')
const cr2c3 = document.querySelector('.cr2 .cc3')
const cr2c4 = document.querySelector('.cr2 .cc4')
const cr2c5 = document.querySelector('.cr2 .cc5')
const cr2c6 = document.querySelector('.cr2 .cc6')

const cr3c1 = document.querySelector('.cr3 .cc1')
const cr3c2 = document.querySelector('.cr3 .cc2')
const cr3c3 = document.querySelector('.cr3 .cc3')
const cr3c4 = document.querySelector('.cr3 .cc4')
const cr3c5 = document.querySelector('.cr3 .cc5')
const cr3c6 = document.querySelector('.cr3 .cc6')

const cr4c1 = document.querySelector('.cr4 .cc1')
const cr4c2 = document.querySelector('.cr4 .cc2')
const cr4c3 = document.querySelector('.cr4 .cc3')
const cr4c4 = document.querySelector('.cr4 .cc4')
const cr4c5 = document.querySelector('.cr4 .cc5')
const cr4c6 = document.querySelector('.cr4 .cc6')

const cr5c1 = document.querySelector('.cr5 .cc1')
const cr5c2 = document.querySelector('.cr5 .cc2')
const cr5c3 = document.querySelector('.cr5 .cc3')
const cr5c4 = document.querySelector('.cr5 .cc4')
const cr5c5 = document.querySelector('.cr5 .cc5')
const cr5c6 = document.querySelector('.cr5 .cc6')

const cr6c1 = document.querySelector('.cr6 .cc1')
const cr6c2 = document.querySelector('.cr6 .cc2')
const cr6c3 = document.querySelector('.cr6 .cc3')
const cr6c4 = document.querySelector('.cr6 .cc4')
const cr6c5 = document.querySelector('.cr6 .cc5')
const cr6c6 = document.querySelector('.cr6 .cc6')

const cr7c1 = document.querySelector('.cr7 .cc1')
const cr7c2 = document.querySelector('.cr7 .cc2')
const cr7c3 = document.querySelector('.cr7 .cc3')
const cr7c4 = document.querySelector('.cr7 .cc4')
const cr7c5 = document.querySelector('.cr7 .cc5')
const cr7c6 = document.querySelector('.cr7 .cc6')

const cr8c1 = document.querySelector('.cr8 .cc1')
const cr8c2 = document.querySelector('.cr8 .cc2')
const cr8c3 = document.querySelector('.cr8 .cc3')
const cr8c4 = document.querySelector('.cr8 .cc4')
const cr8c5 = document.querySelector('.cr8 .cc5')
const cr8c6 = document.querySelector('.cr8 .cc6')

const cr9c1 = document.querySelector('.cr9 .cc1')
const cr9c2 = document.querySelector('.cr9 .cc2')
const cr9c3 = document.querySelector('.cr9 .cc3')
const cr9c4 = document.querySelector('.cr9 .cc4')
const cr9c5 = document.querySelector('.cr9 .cc5')
const cr9c6 = document.querySelector('.cr9 .cc6')

const cr0c1 = document.querySelector('.cr10 .cc1')
const cr0c2 = document.querySelector('.cr10 .cc2')
const cr0c3 = document.querySelector('.cr10 .cc3')
const cr0c4 = document.querySelector('.cr10 .cc4')
const cr0c5 = document.querySelector('.cr10 .cc5')
const cr0c6 = document.querySelector('.cr10 .cc6')
const cmatrix = [
    [cr1c1, cr1c2, cr1c3, cr1c4, cr1c5, cr1c6],
    [cr2c1, cr2c2, cr2c3, cr2c4, cr2c5, cr2c6],
    [cr3c1, cr3c2, cr3c3, cr3c4, cr3c5, cr3c6],
    [cr4c1, cr4c2, cr4c3, cr4c4, cr4c5, cr4c6],
    [cr5c1, cr5c2, cr5c3, cr5c4, cr5c5, cr5c6],
    [cr6c1, cr6c2, cr6c3, cr6c4, cr6c5, cr6c6],
    [cr7c1, cr7c2, cr7c3, cr7c4, cr7c5, cr7c6],
    [cr8c1, cr8c2, cr8c3, cr8c4, cr8c5, cr8c6],
    [cr9c1, cr9c2, cr9c3, cr9c4, cr9c5, cr9c6],
    [cr0c1, cr0c2, cr0c3, cr0c4, cr0c5, cr0c6],
]

const blue = document.querySelector('.blue')
blue.addEventListener('click', clickBlue)
const purple = document.querySelector('.purple')
purple.addEventListener('click', clickPurple)
const red = document.querySelector('.red')
red.addEventListener('click', clickRed)
const orange = document.querySelector('.orange')
orange.addEventListener('click', clickOrange)
const yellow = document.querySelector('.yellow')
yellow.addEventListener('click', clickYellow)
const green = document.querySelector('.green')
green.addEventListener('click', clickGreen)
const submit = document.querySelector('.submit')
submit.addEventListener('click', clickSubmit)

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
    if (e.key == '4') {
        clickOrange()
    }
    if (e.key == '5') {
        clickYellow()
    }
    if (e.key == '6') {
        clickGreen()
    }
    if (e.key == 'Enter') {
        clickSubmit()
    }
})

function clickSubmit(){
    arrow.style.top = '97%'
    arrow.style.left = '12.5%'
    col = 0
    var white = 0
    var black = 0
    if (dif === 'easy') {
        if (guess[0] == answer[0]) {
            cmatrix[row][0].style.backgroundColor = 'white'
        }
        else if (answer.includes(guess[0])){
            cmatrix[row][0].style.backgroundColor = 'black'
        }
        if (guess[1] == answer[1]) {
            cmatrix[row][1].style.backgroundColor = 'white'
        }
        else if (answer.includes(guess[1])){
            cmatrix[row][1].style.backgroundColor = 'black'
        }
        if (guess[2] == answer[2]) {
            cmatrix[row][2].style.backgroundColor = 'white'
        }
        else if (answer.includes(guess[2])){
            cmatrix[row][2].style.backgroundColor = 'black'
        }
        if (guess[3] == answer[3]) {
            cmatrix[row][3].style.backgroundColor = 'white'
        }
        else if (answer.includes(guess[3])){
            cmatrix[row][3].style.backgroundColor = 'black'
        }
    }
    if (dif === 'medium'){
        if (guess[0] == answer[0]) {
            white += 1
        }
        else if (answer.includes(guess[0])){
            black += 1
        }
        if (guess[1] == answer[1]) {
            white += 1
        }
        else if (answer.includes(guess[1])){
            black += 1
        }
        if (guess[2] == answer[2]) {
            white += 1
        }
        else if (answer.includes(guess[2])){
            black += 1
        }
        if (guess[3] == answer[3]) {
            white += 1
        }
        else if (answer.includes(guess[3])){
            black += 1
        }
        for (let i = 0; i < white; i++) {
            cmatrix[row][i].style.backgroundColor = 'white'
        }
        for (let i = white; i < white + black; i++) {
            cmatrix[row][i].style.backgroundColor = 'black'
        }
        if (white == 4){
            alert('You Win!!')
        }
    }
    if (dif === 'hard'){
        if (guess[0] == answer[0]) {
            white += 1
        }
        else if (answer.includes(guess[0])){
            black += 1
        }
        if (guess[1] == answer[1]) {
            white += 1
        }
        else if (answer.includes(guess[1])){
            black += 1
        }
        if (guess[2] == answer[2]) {
            white += 1
        }
        else if (answer.includes(guess[2])){
            black += 1
        }
        if (guess[3] == answer[3]) {
            white += 1
        }
        else if (answer.includes(guess[3])){
            black += 1
        }
        if (guess[4] == answer[4]) {
            white += 1
        }
        else if (answer.includes(guess[4])){
            black += 1
        }
        if (guess[5] == answer[5]) {
            white += 1
        }
        else if (answer.includes(guess[5])){
            black += 1
        }
        for (let i = 0; i < white; i++) {
            cmatrix[row][i].style.backgroundColor = 'white'
        }
        for (let i = white; i < white + black; i++) {
            cmatrix[row][i].style.backgroundColor = 'black'
        }
        if (white == 6){
            alert('You Win!!')
        }
    }
    row += 1
}

function clickBlue(){
    guess[col] = 'b'
    gmatrix[row][col].style.backgroundColor = 'blue'
    col += 1
    if (dif == 'easy' && col > 3) {
        col = 0
    }
    if (dif == 'medium' && col > 3) {
        col = 0
    }
    if (dif == 'hard' && col > 5) {
        col = 0
    }
    movearrow()
}

function clickPurple(){
    guess[col] = 'p'
    gmatrix[row][col].style.backgroundColor = 'purple'
    col += 1
    if (dif == 'easy' && col > 3) {
        col = 0
    }
    if (dif == 'medium' && col > 3) {
        col = 0
    }
    if (dif == 'hard' && col > 5) {
        col = 0
    }
    movearrow()
}

function clickRed(){
    guess[col] = 'r'
    gmatrix[row][col].style.backgroundColor = 'red'
    col += 1
    if (dif == 'easy' && col > 3) {
        col = 0
    }
    if (dif == 'medium' && col > 3) {
        col = 0
    }
    if (dif == 'hard' && col > 5) {
        col = 0
    }
    movearrow()
}

function clickOrange(){
    guess[col] = 'o'
    gmatrix[row][col].style.backgroundColor = 'orange'
    col += 1
    if (dif == 'easy' && col > 3) {
        col = 0
    }
    if (dif == 'medium' && col > 3) {
        col = 0
    }
    if (dif == 'hard' && col > 5) {
        col = 0
    }
    movearrow()
}

function clickYellow(){
    guess[col] = 'y'
    gmatrix[row][col].style.backgroundColor = 'yellow'
    col += 1
    if (dif == 'easy' && col > 3) {
        col = 0
    }
    if (dif == 'medium' && col > 3) {
        col = 0
    }
    if (dif == 'hard' && col > 5) {
        col = 0
    }
    movearrow()
}

function clickGreen(){
    guess[col] = 'g'
    gmatrix[row][col].style.backgroundColor = 'green'
    col += 1
    if (dif == 'easy' && col > 3) {
        col = 0
    }
    if (dif == 'medium' && col > 3) {
        col = 0
    }
    if (dif == 'hard' && col > 5) {
        col = 0
    }
    movearrow()
}

function movearrow(){
    if (col === 0) {
        arrow.style.left = '12.5%'
    }
    if (col === 1) {
        arrow.style.left = '23%'
    }
    if (col === 2) {
        arrow.style.left = '33.5%'
    }
    if (col === 3) {
        arrow.style.left = '44%'
    }
    if (col === 4) {
        arrow.style.left = '54.5%'
    }
    if (col === 5) {
        arrow.style.left = '65%'
    }
}

function resetgame() {
    answer = ['n', 'n', 'n', 'n', 'n', 'n']
    if (dif == 'hard') {
        for (let i = 0; i < 6; i++) {
            answer[i] = ['b', 'p', 'r', 'o', 'y', 'g'][Math.floor(Math.random()*6)]
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            answer[i] = ['b', 'p', 'r', 'o', 'y', 'g'][Math.floor(Math.random()*6)]
        }
    }
    col = 0
    row = 0
    movearrow()
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 6; j++) {
            gmatrix[i][j].style.backgroundColor = ''
            cmatrix[i][j].style.backgroundColor = ''
        }
    }
    if (dif === 'easy' || dif === 'medium'){
        gmatrix[0][4].style.display = 'none'
        gmatrix[0][5].style.display = 'none'
        gmatrix[1][4].style.display = 'none'
        gmatrix[1][5].style.display = 'none'
        gmatrix[2][4].style.display = 'none'
        gmatrix[2][5].style.display = 'none'
        gmatrix[3][4].style.display = 'none'
        gmatrix[3][5].style.display = 'none'
        gmatrix[4][4].style.display = 'none'
        gmatrix[4][5].style.display = 'none'
        gmatrix[5][4].style.display = 'none'
        gmatrix[5][5].style.display = 'none'
        gmatrix[6][4].style.display = 'none'
        gmatrix[6][5].style.display = 'none'
        gmatrix[7][4].style.display = 'none'
        gmatrix[7][5].style.display = 'none'
        gmatrix[8][4].style.display = 'none'
        gmatrix[8][5].style.display = 'none'
        gmatrix[9][4].style.display = 'none'
        gmatrix[9][5].style.display = 'none'
    
        cmatrix[0][4].style.display = 'none'
        cmatrix[0][5].style.display = 'none'
        cmatrix[1][4].style.display = 'none'
        cmatrix[1][5].style.display = 'none'
        cmatrix[2][4].style.display = 'none'
        cmatrix[2][5].style.display = 'none'
        cmatrix[3][4].style.display = 'none'
        cmatrix[3][5].style.display = 'none'
        cmatrix[4][4].style.display = 'none'
        cmatrix[4][5].style.display = 'none'
        cmatrix[5][4].style.display = 'none'
        cmatrix[5][5].style.display = 'none'
        cmatrix[6][4].style.display = 'none'
        cmatrix[6][5].style.display = 'none'
        cmatrix[7][4].style.display = 'none'
        cmatrix[7][5].style.display = 'none'
        cmatrix[8][4].style.display = 'none'
        cmatrix[8][5].style.display = 'none'
        cmatrix[9][4].style.display = 'none'
        cmatrix[9][5].style.display = 'none'
    }
    if (dif === 'hard'){
        gmatrix[0][4].style.display = 'inline'
        gmatrix[0][5].style.display = 'inline'
        gmatrix[1][4].style.display = 'inline'
        gmatrix[1][5].style.display = 'inline'
        gmatrix[2][4].style.display = 'inline'
        gmatrix[2][5].style.display = 'inline'
        gmatrix[3][4].style.display = 'inline'
        gmatrix[3][5].style.display = 'inline'
        gmatrix[4][4].style.display = 'inline'
        gmatrix[4][5].style.display = 'inline'
        gmatrix[5][4].style.display = 'inline'
        gmatrix[5][5].style.display = 'inline'
        gmatrix[6][4].style.display = 'inline'
        gmatrix[6][5].style.display = 'inline'
        gmatrix[7][4].style.display = 'inline'
        gmatrix[7][5].style.display = 'inline'
        gmatrix[8][4].style.display = 'inline'
        gmatrix[8][5].style.display = 'inline'
        gmatrix[9][4].style.display = 'inline'
        gmatrix[9][5].style.display = 'inline'
    
        cmatrix[0][4].style.display = 'inline'
        cmatrix[0][5].style.display = 'inline'
        cmatrix[1][4].style.display = 'inline'
        cmatrix[1][5].style.display = 'inline'
        cmatrix[2][4].style.display = 'inline'
        cmatrix[2][5].style.display = 'inline'
        cmatrix[3][4].style.display = 'inline'
        cmatrix[3][5].style.display = 'inline'
        cmatrix[4][4].style.display = 'inline'
        cmatrix[4][5].style.display = 'inline'
        cmatrix[5][4].style.display = 'inline'
        cmatrix[5][5].style.display = 'inline'
        cmatrix[6][4].style.display = 'inline'
        cmatrix[6][5].style.display = 'inline'
        cmatrix[7][4].style.display = 'inline'
        cmatrix[7][5].style.display = 'inline'
        cmatrix[8][4].style.display = 'inline'
        cmatrix[8][5].style.display = 'inline'
        cmatrix[9][4].style.display = 'inline'
        cmatrix[9][5].style.display = 'inline'
    }
}

resetgame()