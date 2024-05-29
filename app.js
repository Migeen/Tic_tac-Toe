let turn = "O";

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
        let winner = '';
        if(currentBoard[0] ==='X' && currentBoard[1] ==='X' && currentBoard[2] ==='X'){
            winner = 'playerOne';
        }else if(currentBoard[0] ==='X' && currentBoard[1] ==='X' && currentBoard[2] ==='X'){
            winner = 'playerOne';
        }
    }
    return { currentBoard, taketurn, store };
})();



let boards = document.querySelectorAll(".inner-box");
boards = Array.from(boards);

boards.forEach(bo => {
    bo.addEventListener('click',function(){
        let square = boards.indexOf(this);
        let turn = gameBoard.taketurn(square);
        let game = gameBoard.store(turn,square);
        console.log(game);
        this.innerHTML = "<h1>"+turn+"</h1>";
    })
})