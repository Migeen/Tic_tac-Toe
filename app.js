let turn = "O";

// document.addEventListener('DOMContentLoaded', function(){
//         document.querySelectorAll('.inner-box').style.pointerEvents = 'none';
// });

    
//Factory function 
let gameBoard = (function () {

    //Array that stores the position of the game
    let currentBoard = [null, null, null, null, null, null, null, null, null];
    let prevIndex = null;

    function taketurn(index) {        

        console.log(index);
        if (turn === "O" &&  index !== prevIndex){
            turn = "X";
            prevIndex = index;
        } else if(turn === "X" && index !== prevIndex){
            turn = "O";
            prevIndex = index;
        }
        return turn;
    }

    function store(turn,square){
        let board = currentBoard;
        currentBoard[square] = turn;
        return board;
    }

    
    function checkAndDisplayWinner(){
        const display = document.querySelector('.display');

        if(currentBoard[0] ==='X' && currentBoard[1] ==='X' && currentBoard[2] ==='X'){
            display.innerHTML = 'playerOne wins the Game';
        }else if(currentBoard[3] ==='X' && currentBoard[4] ==='X' && currentBoard[5] ==='X'){
            display.innerText = 'playerOne wins the Game';
        }else if(currentBoard[6] ==='X' && currentBoard[7] ==='X' && currentBoard[8] ==='X'){
            display.innerHTML = 'playerOne wins the Game';
        }else if(currentBoard[0] ==='X' && currentBoard[3] ==='X' && currentBoard[6] ==='X'){
            display.innerHTML = 'playerOne wins the Game';
        }else if(currentBoard[1] ==='X' && currentBoard[4] ==='X' && currentBoard[7] ==='X'){
            display.innerHTML = 'playerOne wins the Game';
        }else if(currentBoard[2] ==='X' && currentBoard[5] ==='X' && currentBoard[8] ==='X'){
            display.innerHTML = 'playerOne wins the Game';
        }else if(currentBoard[0] ==='X' && currentBoard[4] ==='X' && currentBoard[8] ==='X'){
            display.innerHTML = 'playerOne wins the Game';
        }else if(currentBoard[2] ==='X' && currentBoard[4] ==='X' && currentBoard[6] ==='X'){
            display.innerHTML = 'playerOne wins the Game';
        }else if(currentBoard[3] ==='O' && currentBoard[4] ==='O' && currentBoard[5] ==='O'){
            display.innerText = 'playerTwo wins the Game';
        }else if(currentBoard[6] ==='O' && currentBoard[7] ==='O' && currentBoard[8] ==='O'){
            display.innerHTML = 'playerTwo wins the Game';
        }else if(currentBoard[0] ==='O' && currentBoard[3] ==='O' && currentBoard[6] ==='O'){
            display.innerHTML = 'playerTwo wins the Game';
        }else if(currentBoard[1] ==='O' && currentBoard[4] ==='O' && currentBoard[7] ==='O'){
            display.innerHTML = 'playerTwo wins the Game';
        }else if(currentBoard[2] ==='O' && currentBoard[5] ==='O' && currentBoard[8] ==='O'){
            display.innerHTML = 'playerTwo wins the Game';
        }else if(currentBoard[0] ==='O' && currentBoard[4] ==='O' && currentBoard[8] ==='O'){
            display.innerHTML = 'playerTwo wins the Game';
        }else if(currentBoard[2] ==='O' && currentBoard[4] ==='O' && currentBoard[6] ==='O'){
            display.innerHTML = 'playerTwo wins the Game';
        }else if(currentBoard[0] ==='O' && currentBoard[1] ==='O' && currentBoard[2] ==='O'){
            display.innerHTML = 'playerTwo wins the Game';
        }else if(currentBoard.every(element => element!=null)){
            display.innerHTML = 'It\'s a tie';
        }
    }

    function reset(){
        const squares = document.querySelectorAll('.inner-box');
        squares.forEach(sq =>{
            sq.textContent = '';
        })
    }
    return { currentBoard, taketurn, store, checkAndDisplayWinner };
})();



let boards = document.querySelectorAll(".inner-box");
boards = Array.from(boards);

boards.forEach(bo => {
    bo.addEventListener('click',function(){
        let square = boards.indexOf(this);
        let turn = gameBoard.taketurn(square);
        gameBoard.store(turn,square);
        gameBoard.checkAndDisplayWinner();
        this.innerHTML= `<h1>${turn}</h1>`
    })
})