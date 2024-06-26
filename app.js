let turn = "O";

//Factory function 
let gameBoard = (function () {

    //Array that stores the position of the game
    let currentBoard = ['','','','','','','','',''];
    let prevIndex = null;

    //changes the turn of a player
    function taketurn(index) {

        if (turn === "O" && index !== prevIndex) {
            turn = "X";
            prevIndex = index;
        } else if (turn === "X" && index !== prevIndex) {
            turn = "O";
            prevIndex = index;
        }
        return turn;
    }


    function reset() {
        const boards = document.querySelectorAll('.inner-box');
        const display = document.querySelector('.display');
        boards.forEach(bo => {
            bo.textContent = '';
            display.textContent = '';
        })
        currentBoard = ['','','','','','','','',''];
        return currentBoard;
    }

    //stores the position of the squares in an array currentBoard
    function store(turn, square) {
        let board = currentBoard;
        currentBoard[square] = turn;
        return board;
    }


    // function that determines the game winner and displays it
    function checkAndDisplayWinner() {
        const display = document.querySelector('.display');

        if (currentBoard[0] === 'X' && currentBoard[1] === 'X' && currentBoard[2] === 'X') {
            display.innerHTML = 'playerOne wins the Game';
        } else if (currentBoard[3] === 'X' && currentBoard[4] === 'X' && currentBoard[5] === 'X') {
            display.innerText = 'playerOne wins the Game';
        } else if (currentBoard[6] === 'X' && currentBoard[7] === 'X' && currentBoard[8] === 'X') {
            display.innerHTML = 'playerOne wins the Game';
        } else if (currentBoard[0] === 'X' && currentBoard[3] === 'X' && currentBoard[6] === 'X') {
            display.innerHTML = 'playerOne wins the Game';
        } else if (currentBoard[1] === 'X' && currentBoard[4] === 'X' && currentBoard[7] === 'X') {
            display.innerHTML = 'playerOne wins the Game';
        } else if (currentBoard[2] === 'X' && currentBoard[5] === 'X' && currentBoard[8] === 'X') {
            display.innerHTML = 'playerOne wins the Game';
        } else if (currentBoard[0] === 'X' && currentBoard[4] === 'X' && currentBoard[8] === 'X') {
            display.innerHTML = 'playerOne wins the Game';
        } else if (currentBoard[2] === 'X' && currentBoard[4] === 'X' && currentBoard[6] === 'X') {
            display.innerHTML = 'playerOne wins the Game';
        } else if (currentBoard[3] === 'O' && currentBoard[4] === 'O' && currentBoard[5] === 'O') {
            display.innerText = 'playerTwo wins the Game';
        } else if (currentBoard[6] === 'O' && currentBoard[7] === 'O' && currentBoard[8] === 'O') {
            display.innerHTML = 'playerTwo wins the Game';
        } else if (currentBoard[0] === 'O' && currentBoard[3] === 'O' && currentBoard[6] === 'O') {
            display.innerHTML = 'playerTwo wins the Game';
        } else if (currentBoard[1] === 'O' && currentBoard[4] === 'O' && currentBoard[7] === 'O') {
            display.innerHTML = 'playerTwo wins the Game';
        } else if (currentBoard[2] === 'O' && currentBoard[5] === 'O' && currentBoard[8] === 'O') {
            display.innerHTML = 'playerTwo wins the Game';
        } else if (currentBoard[0] === 'O' && currentBoard[4] === 'O' && currentBoard[8] === 'O') {
            display.innerHTML = 'playerTwo wins the Game';
        } else if (currentBoard[2] === 'O' && currentBoard[4] === 'O' && currentBoard[6] === 'O') {
            display.innerHTML = 'playerTwo wins the Game';
        } else if (currentBoard[0] === 'O' && currentBoard[1] === 'O' && currentBoard[2] === 'O') {
            display.innerHTML = 'playerTwo wins the Game';
        } else if (currentBoard.every(element => element != '')) {
            display.innerHTML = 'It\'s a tie';
        }
    }
    return { currentBoard, reset, taketurn, store, checkAndDisplayWinner };
})();



document.addEventListener('DOMContentLoaded', () => {


    let boards = document.querySelectorAll(".inner-box");
    boards = Array.from(boards);
    const startBtn = document.querySelector('#start-btn');
    const resetBtn = document.querySelector('#reset-btn');

    // handles the Click events of the Game Board
    function handleClick() {
        let display = document.querySelector('.display');
        let square = boards.indexOf(this);
        let turn = gameBoard.taketurn(square);
        gameBoard.store(turn, square);
        gameBoard.checkAndDisplayWinner();
        this.innerHTML = `<h1>${turn}</h1>`;
        if(display.textContent !=''){
            disableEventListener();
        }        
    }

    // disable the click events
    function disableEventListener() {
        boards.forEach(div => {
            div.removeEventListener('click', handleClick);
            div.style.pointerEvents = 'none';
        })
    }

    //enable the click events
    function enableEventListener() {
        boards.forEach(bo => {
            bo.addEventListener('click', handleClick);
            bo.style.pointerEvents = 'auto';
        });
    }

    // button that enables the click events
    startBtn.addEventListener('click', function () {
        enableEventListener();
        startBtn.disabled = true;
    });


    // reset button that clears the squares
    resetBtn.addEventListener('click', function () {
        gameBoard.reset();
        disableEventListener();
        startBtn.disabled = false;
    });

    // Initially disable the click events listeners for the Game Board
    disableEventListener();
});

