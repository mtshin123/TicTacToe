


function createGrid(n) {
    gameGrid = [];
    for (let i = 0; i < n; i++) {
        temp = []
        for (let j = 0; j < n; j++) {
            temp.push("_")
        }
        gameGrid.push(temp)
    }
    return gameGrid
}

function checkWin(gameGrid, posX, posY, marker) {
    const n = gameGrid.length
    for (let i = 0; i < n; i++) {
        if (gameGrid[i][posX] != marker) {
            return false;
        }
    }
    for (let j = 0; j < n; j++) {
        if (gameGrid[posY][j] != marker) {
            return false;
        }
    }
    return true;
}


function printGameGrid(gameGrid) {
    for (let i = 0; i < gameGrid.length; i++) {
        row = ""
        for (let j = 0; j < gameGrid.length; j++) {
            row += gameGrid[j][i]
        }
        row += "\n"
        console.log(row)
    }
}
function game() {
    inputN = parseInt(prompt("Enter dimensions n"))
    gameGrid = createGrid(inputN)

    markers = ["X", "O"]
    
    console.log("First player moves! You are X.")
    inputRow = parseInt(prompt("Input valid row number"))
    inputCol = parseInt(prompt("Input valid column number"))
    gameGrid[inputRow][inputCol] = "X"
    let playerNum = 0;
    let maxPlayers = 2;

    while (!checkWin(gameGrid, inputCol, inputRow, markers[0])) {
        currentPlayer = playerNum % maxPlayers + 1;
        currentPlayerMarker = markers[currentPlayer];

        console.log(`Player ${currentPlayer} turn! Your marker is ${currentPlayerMarker}`)
        inputRow = parseInt(prompt("Input valid row number"))
        inputCol = parseInt(prompt("Input valid column number"))
        while (gameGrid[inputRow][inputCol] != "_") {
            inputRow = parseInt(prompt("Input valid row number"))
            inputCol = parseInt(prompt("Input valid column number"))
        }
        gameGrid[inputRow][inputCol] = currentPlayerMarker;
        printGameGrid(gameGrid)
        playerNum++;

    }
}

game()