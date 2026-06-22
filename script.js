(function createGame(){
    const htmlDocument = document.querySelector("html");
    const playGameButton = document.querySelector("#start-game-btn");
    const dialog = document.querySelector("#dialog");
    const closeDialogBtn = document.querySelector("#close-dialog");
    const startGameBtn = document.querySelector(".start-game-button");
    const mainGrid = document.querySelector(".main");
    const startGameForm = document.querySelector("#start-game-form");
    const firstPlayerName = document.querySelector("#first-player-name");
    const secondPlayerName = document.querySelector("#second-player-name");
    const playerTurnName = document.querySelector("#player-turn-name")
    const playerTurnText = document.querySelector(".turn-text");
    const playerOneScoreName = document.querySelector(".player-one-score-name");
    const playerTwoScoreName = document.querySelector(".player-two-score-name");
    const playerOneScore = document.querySelector(".player-one-score");
    const playerTwoScore = document.querySelector(".player-two-score");
    const gameCells = document.querySelector(".game-cells");
    const cellOne = document.querySelector(".cell-one");
    const cellTwo = document.querySelector(".cell-two");
    const cellThree = document.querySelector(".cell-three");
    const cellFour = document.querySelector(".cell-four");
    const cellFive = document.querySelector(".cell-five");
    const cellSix = document.querySelector(".cell-six");
    const cellSeven = document.querySelector(".cell-seven");
    const cellEight = document.querySelector(".cell-eight");
    const cellNine = document.querySelector(".cell-nine");
    const playAgainButton = document.querySelector(".new-game-btn");

    let gameBoard = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    let turn = "player-one";
    let checkWinnerExists = false;

    console.log(gameBoard);

    function createPlayer(name, symbol){
        let score = 0;

        const getScore = () => score;
        const incrementScore = () => {score++; };
        const makeMove = function(numberOne, numberTwo, symbol){
            gameBoard[numberOne].splice(numberTwo, 1, symbol);
        }
        function announceWinner(name){
            if (name === firstPlayerName.value){
                incrementScore();
                cellOne.style.zIndex = "-1";
                cellTwo.style.zIndex = "-1";
                cellThree.style.zIndex = "-1";
                cellFour.style.zIndex = "-1";
                cellFive.style.zIndex = "-1";
                cellSix.style.zIndex = "-1";
                cellSeven.style.zIndex = "-1";
                cellEight.style.zIndex = "-1";
                cellNine.style.zIndex = "-1";
                checkWinnerExists = true;
                playerOneScore.textContent = score;
                playerTurnText.textContent = "";
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
                playerTurnName.textContent = name + " won this round!"
            }else if (name === secondPlayerName.value){
                incrementScore();
                cellOne.style.zIndex = "-1";
                cellTwo.style.zIndex = "-1";
                cellThree.style.zIndex = "-1";
                cellFour.style.zIndex = "-1";
                cellFive.style.zIndex = "-1";
                cellSix.style.zIndex = "-1";
                cellSeven.style.zIndex = "-1";
                cellEight.style.zIndex = "-1";
                cellNine.style.zIndex = "-1";
                checkWinnerExists = true;
                playerTwoScore.textContent= score;
                playerTurnText.textContent = "";
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
                playerTurnName.textContent = name + " won this round!"
            }
        }
        const checkWinner = function(name){
            if(gameBoard[0][0] === symbol && gameBoard[0][1] === symbol && gameBoard[0][2] === symbol){ //first row
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellOne.classList.add("blue-cell")
                    cellTwo.classList.add("blue-cell")
                    cellThree.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellOne.classList.add("red-cell")
                    cellTwo.classList.add("red-cell")
                    cellThree.classList.add("red-cell")
                }
            }else if (gameBoard[1][0] === symbol && gameBoard[1][1] === symbol && gameBoard[1][2] === symbol){ //second row
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellFour.classList.add("blue-cell")
                    cellFive.classList.add("blue-cell")
                    cellSix.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellFour.classList.add("red-cell")
                    cellFive.classList.add("red-cell")
                    cellSix.classList.add("red-cell")
                }
            }else if (gameBoard[2][0] === symbol && gameBoard[2][1] === symbol && gameBoard[2][2] === symbol){ //third row
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellSeven.classList.add("blue-cell")
                    cellEight.classList.add("blue-cell")
                    cellNine.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellSeven.classList.add("red-cell")
                    cellEight.classList.add("red-cell")
                    cellNine.classList.add("red-cell")
                }
            }else if (gameBoard[0][0] === symbol && gameBoard[1][0] === symbol && gameBoard[2][0] === symbol){ //first column
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellOne.classList.add("blue-cell")
                    cellFour.classList.add("blue-cell")
                    cellSeven.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellOne.classList.add("red-cell")
                    cellFour.classList.add("red-cell")
                    cellSeven.classList.add("red-cell")
                }
            }else if (gameBoard[0][1] === symbol && gameBoard[1][1] === symbol && gameBoard[2][1] === symbol){ //second column
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellTwo.classList.add("blue-cell")
                    cellFive.classList.add("blue-cell")
                    cellEight.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellTwo.classList.add("red-cell")
                    cellFive.classList.add("red-cell")
                    cellEight.classList.add("red-cell")
                }
            }else if (gameBoard[0][2] === symbol && gameBoard[1][2] === symbol && gameBoard[2][2] === symbol){ //third column
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellThree.classList.add("blue-cell")
                    cellSix.classList.add("blue-cell")
                    cellNine.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellThree.classList.add("red-cell")
                    cellSix.classList.add("red-cell")
                    cellNine.classList.add("red-cell")
                }
            }else if (gameBoard[0][0] === symbol && gameBoard[1][1] === symbol && gameBoard[2][2] === symbol){ //diagonal one
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellOne.classList.add("blue-cell")
                    cellFive.classList.add("blue-cell")
                    cellNine.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellOne.classList.add("red-cell")
                    cellFive.classList.add("red-cell")
                    cellNine.classList.add("red-cell")
                }
            }else if (gameBoard[0][2] === symbol && gameBoard[1][1] === symbol && gameBoard[2][0] === symbol){ //diagonal two
                announceWinner(name);
                if(name === firstPlayerName.value){
                    cellThree.classList.add("blue-cell")
                    cellFive.classList.add("blue-cell")
                    cellSeven.classList.add("blue-cell")
                }else if (name === secondPlayerName.value){
                    cellThree.classList.add("red-cell")
                    cellFive.classList.add("red-cell")
                    cellSeven.classList.add("red-cell")
                }
            }else if (cellOne.textContent !== "" && cellTwo.textContent !== "" && cellThree.textContent !== "" && cellFour.textContent !== "" && cellFive.textContent !== "" && cellSix.textContent !== "" && cellSeven.textContent !== "" && cellEight.textContent !== "" && cellNine.textContent !== ""){
                playerTurnText.textContent = "";
                playerTurnName.style.color = "black";
                playerTurnName.textContent = "It's a draw!";            
            }
        }
    
        return {name, symbol, getScore, incrementScore, makeMove, checkWinner};
    }

    function resetBoard(){
        gameBoard = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
        checkWinnerExists = false;
        playerTurnName.style.color = "";
        playerTurnText.textContent= "'s turn"
        cellOne.textContent = "";
        cellTwo.textContent = "";
        cellThree.textContent = "";
        cellFour.textContent = "";
        cellFive.textContent = "";
        cellSix.textContent = "";
        cellSeven.textContent = "";
        cellEight.textContent = "";
        cellNine.textContent = "";
        cellOne.style.zIndex = "1";
        cellTwo.style.zIndex = "1";
        cellThree.style.zIndex = "1";
        cellFour.style.zIndex = "1";            
        cellFive.style.zIndex = "1";
        cellSix.style.zIndex = "1";
        cellSeven.style.zIndex = "1";
        cellEight.style.zIndex = "1";
        cellNine.style.zIndex = "1";
        cellOne.classList.remove("blue-cell");
        cellOne.classList.remove("red-cell");
        cellTwo.classList.remove("blue-cell");
        cellTwo.classList.remove("red-cell");
        cellThree.classList.remove("blue-cell");
        cellThree.classList.remove("red-cell");
        cellFour.classList.remove("blue-cell");
        cellFour.classList.remove("red-cell");
        cellFive.classList.remove("blue-cell");
        cellFive.classList.remove("red-cell");
        cellSix.classList.remove("blue-cell");
        cellSix.classList.remove("red-cell");
        cellSeven.classList.remove("blue-cell");
        cellSeven.classList.remove("red-cell");
        cellEight.classList.remove("blue-cell");
        cellEight.classList.remove("red-cell");
        cellNine.classList.remove("blue-cell");
        cellNine.classList.remove("red-cell");

        if(turn === "player-one"){
            playerTurnName.textContent = firstPlayerName.value;
            playerTurnName.classList.remove("text-red");
            playerTurnName.classList.add("text-blue");
        }else if(turn === "player-two"){
            playerTurnName.textContent = secondPlayerName.value;
            playerTurnName.classList.remove("text-blue");
            playerTurnName.classList.add("text-red");
        }
    }

    function startGame(){
        dialog.showModal();
    }

    function closeDialog(){
        dialog.close();
    }

    playGameButton.addEventListener("click", startGame);
    closeDialogBtn.addEventListener("click", closeDialog);
    startGameForm.onsubmit = function(e){
        e.preventDefault();
        startGameBtn.remove();
        htmlDocument.classList.remove("cover");
        mainGrid.style.zIndex = "0";

        playerTurnName.textContent = firstPlayerName.value;
        playerOneScoreName.textContent = firstPlayerName.value;
        playerTwoScoreName.textContent = secondPlayerName.value;

        const playerOne = createPlayer(firstPlayerName.value, "X");
        const playerTwo = createPlayer(secondPlayerName.value, "O");

        cellOne.addEventListener("click", function(){
            cellOne.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellOne.textContent = "X";
                playerOne.makeMove(0, 0, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellOne.textContent = "O";
                playerTwo.makeMove(0, 0, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });

        cellTwo.addEventListener("click", function(){
            cellTwo.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellTwo.textContent = "X";
                playerOne.makeMove(0, 1, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellTwo.textContent = "O";
                playerTwo.makeMove(0, 1, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });   

        cellThree.addEventListener("click", function(){
            cellThree.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellThree.textContent = "X";
                playerOne.makeMove(0, 2, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellThree.textContent = "O";
                playerTwo.makeMove(0, 2, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });

        cellFour.addEventListener("click", function(){
            cellFour.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellFour.textContent = "X";
                playerOne.makeMove(1, 0, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellFour.textContent = "O";
                playerTwo.makeMove(1, 0, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });

        cellFive.addEventListener("click", function(){
            cellFive.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellFive.textContent = "X";
                playerOne.makeMove(1, 1, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellFive.textContent = "O";
                playerTwo.makeMove(1, 1, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });

        cellSix.addEventListener("click", function(){
            cellSix.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellSix.textContent = "X";
                playerOne.makeMove(1, 2, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellSix.textContent = "O";
                playerTwo.makeMove(1, 2, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });

        cellSeven.addEventListener("click", function(){
            cellSeven.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellSeven.textContent = "X";
                playerOne.makeMove(2, 0, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellSeven.textContent = "O";
                playerTwo.makeMove(2, 0, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });

        cellEight.addEventListener("click", function(){
            cellEight.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellEight.textContent = "X";
                playerOne.makeMove(2, 1, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellEight.textContent = "O";
                playerTwo.makeMove(2, 1, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });

        cellNine.addEventListener("click", function(){
            cellNine.style.zIndex = "-1";
            if (turn === "player-one"){
                turn = "player-two";
                cellNine.textContent = "X";
                playerOne.makeMove(2, 2, playerOne.symbol);
                playerTurnName.textContent = secondPlayerName.value;
                playerOne.checkWinner(playerOne.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-blue");
                playerTurnName.classList.add("text-red");
            }else if (turn === "player-two"){
                turn = "player-one";
                cellNine.textContent = "O";
                playerTwo.makeMove(2, 2, playerTwo.symbol);
                playerTurnName.textContent = firstPlayerName.value;
                playerTwo.checkWinner(playerTwo.name);
                if (checkWinnerExists === true){
                    return;
                }
                playerTurnName.classList.remove("text-red");
                playerTurnName.classList.add("text-blue");
            }
        });
    }   

    playAgainButton.addEventListener("click", resetBoard);
})();