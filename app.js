
let factory = (function() {

    let gameBoard = {
        TL: '',
        TM: '',
        TR: '',
        ML: '',
        MM: '',
        MR: '',
        BL: '',
        BM: '',
        BR: ''
    }

    const playerInput = function (inp){
        if(inp='TL'){
            gameBoard.TL ='X'
        }else if(inp='TM'){
            gameBoard.TM = 'X'
        }else if(inp='TR'){
            gameBoard.TR = 'X'
        }else if(inp='ML'){
            gameBoard.ML = 'X'
        }else if(inp='MM'){
            gameBoard.MM = 'X'
        }else if(inp='MR'){
            gameBoard.MR = 'X'
        }else if(inp='BL'){
            gameBoard.BL = 'X'
        }else if(inp='BM'){
            gameBoard.BM = 'X'
        }else if(inp='BR'){
            gameBoard.BR = 'X'
        }

        return gameBoard;
    }

    const compInput = function (inp){
        if(inp='TL'){
            gameBoard.TL ='O'
        }else if(inp='TM'){
            gameBoard.TM = 'O'
        }else if(inp='TR'){
            gameBoard.TR = 'O'
        }else if(inp='ML'){
            gameBoard.ML = 'O'
        }else if(inp='MM'){
            gameBoard.MM = 'O'
        }else if(inp='MR'){
            gameBoard.MR = 'O'
        }else if(inp='BL'){
            gameBoard.BL = 'O'
        }else if(inp='BM'){
            gameBoard.BM = 'O'
        }else if(inp='BR'){
            gameBoard.BR = 'O'
        }

        return gameBoard;
    }


    return {playerInput,compInput};
})();

prompt('Enter the input: ');

let inpp = factory.playerInput(prompt.value);

console.log(inpp);