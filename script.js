(function createGameBoard(){
    let gameBoard = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    console.log(gameBoard);

    function createPlayer(name, symbol){
        const playerSymbol = symbol;
        let score = 0;

        const getScore = () => score;
        const incrementScore = () => {score++; };
        const makeMove = function(numberOne, numberTwo){
            gameBoard[numberOne].splice(numberTwo, 1, symbol);
        }
        const checkWinner = function(){
            if(gameBoard[0][0] === symbol && gameBoard[0][1] === symbol && gameBoard[0][2] === symbol){ //first row
                console.log(`${name} is the winner!`)
            }else if (gameBoard[1][0] === symbol && gameBoard[1][1] === symbol && gameBoard[1][2] === symbol){ //second row
                console.log(`${name} is the winner!`)
            }else if (gameBoard[2][0] === symbol && gameBoard[2][1] === symbol && gameBoard[2][2] === symbol){ //third row
                console.log(`${name} is the winner!`)
            }else if (gameBoard[0][0] === symbol && gameBoard[1][0] === symbol && gameBoard[2][0] === symbol){ //first column
                console.log(`${name} is the winner!`)
            }else if (gameBoard[0][1] === symbol && gameBoard[1][1] === symbol && gameBoard[2][1] === symbol){ //second column
                console.log(`${name} is the winner!`)
            }else if (gameBoard[0][2] === symbol && gameBoard[1][2] === symbol && gameBoard[2][2] === symbol){ //third column
                console.log(`${name} is the winner!`)
            }else if (gameBoard[0][0] === symbol && gameBoard[1][1] === symbol && gameBoard[2][2] === symbol){ //diagonal one
                console.log(`${name} is the winner!`)
            }else if (gameBoard[0][2] === symbol && gameBoard[1][1] === symbol && gameBoard[2][0] === symbol){ //diagonal two
                console.log(`${name} is the winner!`)
            }
        }
        return {name, symbol, getScore, incrementScore, makeMove, checkWinner};
    }

    const playerAlperen = createPlayer("Alperen", "X");
    const playerTeyfik = createPlayer("Teyfik", "O");

    playerTeyfik.checkWinner();
    playerAlperen.checkWinner();

    console.log({
    playerName: playerAlperen.name,
    playerSymbol: playerAlperen.symbol,
    playerScore: playerAlperen.getScore()
    });

    console.log({
    playerName: playerTeyfik.name,
    playerSymbol: playerTeyfik.symbol,
    playerScore: playerTeyfik.getScore()
    });

})();

//ich muss mein checkWin nicht hard-coded machen sonder wenn auch Y oder X vermischt
//sind trotzdem der Gewinner erkannt wird