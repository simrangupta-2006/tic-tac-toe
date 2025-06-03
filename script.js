let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
let isGameOver = false;

function handleclick(cell) {
    const cellId = parseInt(cell.id);

    if (isGameOver || gameBoard[cellId] !== '') {
        return;
    }

    gameBoard[cellId] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        alert(`${currentPlayer} wins!`);
        isGameOver = true;
        return;
    }

    if (gameBoard.every(val => val !== '')) {
        alert("It's a draw!");
        isGameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    return winCombos.some(combo => {
        const [a, b, c] = combo;
        return (
            gameBoard[a] !== '' &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]
        );
    });
}

