(function createGame(){
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
        function announceWinner(name){
            console.log(name + " is the winner! Congratulations!")
        }
        function resetBoard(){
            gameBoard = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        }
        const checkWinner = function(){
            if(gameBoard[0][0] === symbol && gameBoard[0][1] === symbol && gameBoard[0][2] === symbol){ //first row
                announceWinner(name);
            }else if (gameBoard[1][0] === symbol && gameBoard[1][1] === symbol && gameBoard[1][2] === symbol){ //second row
                announceWinner(name);
            }else if (gameBoard[2][0] === symbol && gameBoard[2][1] === symbol && gameBoard[2][2] === symbol){ //third row
                announceWinner(name);
            }else if (gameBoard[0][0] === symbol && gameBoard[1][0] === symbol && gameBoard[2][0] === symbol){ //first column
                announceWinner(name);
            }else if (gameBoard[0][1] === symbol && gameBoard[1][1] === symbol && gameBoard[2][1] === symbol){ //second column
                announceWinner(name);
            }else if (gameBoard[0][2] === symbol && gameBoard[1][2] === symbol && gameBoard[2][2] === symbol){ //third column
                announceWinner(name);
            }else if (gameBoard[0][0] === symbol && gameBoard[1][1] === symbol && gameBoard[2][2] === symbol){ //diagonal one
                announceWinner(name);
            }else if (gameBoard[0][2] === symbol && gameBoard[1][1] === symbol && gameBoard[2][0] === symbol){ //diagonal two
                announceWinner(name);
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