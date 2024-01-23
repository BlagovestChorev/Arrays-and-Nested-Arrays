function ticTacToeGame(moves) {
    const dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let currentPlayer = 'X';

    function printDashboard() {
        for (const row of dashboard) {
            console.log(row.join('\t'));
        }
    }

    function checkWin() {
        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            if ((dashboard[i][0] === currentPlayer && dashboard[i][1] === currentPlayer && dashboard[i][2] === currentPlayer) ||
                (dashboard[0][i] === currentPlayer && dashboard[1][i] === currentPlayer && dashboard[2][i] === currentPlayer)) {
                return true;
            }
        }

        // Check diagonals
        if ((dashboard[0][0] === currentPlayer && dashboard[1][1] === currentPlayer && dashboard[2][2] === currentPlayer) ||
            (dashboard[0][2] === currentPlayer && dashboard[1][1] === currentPlayer && dashboard[2][0] === currentPlayer)) {
            return true;
        }

        return false;
    }

    for (const move of moves) {
        const [row, col] = move.split(' ').map(Number);

        if (dashboard[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            printDashboard();
            return;
        }

        dashboard[row][col] = currentPlayer;

        if (checkWin()) {
            console.log(`Player ${currentPlayer} wins!`);
            printDashboard();
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    console.log("The game ended! Nobody wins :(");
    printDashboard();
}

// Example usage:
const inputMoves = ["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"];
ticTacToeGame(inputMoves);