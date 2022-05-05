const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');
const scoreSelect = document.querySelector('#playto');
const p1Display = document.querySelector('#displayP1');
const p2Display = document.querySelector('#displayP2');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameIsOver = false;

p1Btn.addEventListener('click', () => {
    if (!gameIsOver) {
        p1Score += 1;

        if (p1Score === winningScore) {
            gameIsOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }

        p1Display.textContent = p1Score;
    }

})

p2Btn.addEventListener('click', () => {
    if (!gameIsOver) {
        p2Score += 1;

        if (p2Score === winningScore) {
            gameIsOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }

        p2Display.textContent = p2Score;
    }
})

scoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    gameIsOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('loser', 'winner');
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}