(function createGameBoard(){
    let gameBoard = [["-", "-", "X"], ["-", "X", "-"], ["X", "-", "-"]];
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
            let gameBoardJoined = gameBoard.join();
            console.log(gameBoardJoined);
            if (gameBoardJoined === `${symbol},${symbol},${symbol},-,-,-,-,-,-`){ //first row
                console.log(name + " is the winner;");
            } else if (gameBoardJoined === `-,-,-,${symbol},${symbol},${symbol},-,-,-`){ //second row
                console.log(name + " is the winner;");
            } else if (gameBoardJoined === `-,-,-,-,-,-,${symbol},${symbol},${symbol}`){ //third row
                console.log(name + " is the winner;");
            } else if (gameBoardJoined === `${symbol},-,-,${symbol},-,-,${symbol},-,-`){ //first column
                console.log(name + " is the winner;");
            } else if (gameBoardJoined === `-,${symbol},-,-,${symbol},-,-,${symbol},-`){ //second column
                console.log(name + " is the winner;");
            } else if (gameBoardJoined === `-,-,${symbol},-,-,${symbol},-,-,${symbol}`){ //third column
                console.log(name + " is the winner;");
            } else if (gameBoardJoined === `${symbol},-,-,-,${symbol},-,-,-,${symbol}`){ //diagonal top-left to bottom-right
                console.log(name + " is the winner;");
            } else if (gameBoardJoined === `-,-,${symbol},-,${symbol},-,${symbol},-,-`){ //diagonal top-right to bottom-left
                console.log(name + " is the winner;");
            }
        }
        return {name, symbol, getScore, incrementScore, makeMove, checkWinner};
    }

    const playerAlperen = createPlayer("Alperen", "X");
    const playerTeyfik = createPlayer("Teyfik", "O");

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

