const app = document.getElementById('app');

class TicTacToe {
    constructor(container) {
        this.container = container;

        this.boardState = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]

        this.players = ['X', 'O'];
        this.currentPlayerIndex = 0;

        this.gameStatus = `Сейчас ходит: ${this.players[this.currentPlayerIndex]}`;
        this.gameOver = false;

        this.render()
    }

    render() {
        this.container.innerHTML = '';
        
        // Game Status UI
        const gameStatusUI = document.createElement('div');
        gameStatusUI.classList.add('game-status');
        gameStatusUI.innerText = this.gameStatus;
        this.container.appendChild(gameStatusUI);

        // Reset Button UI
        const resetButton = document.createElement('button');
        resetButton.innerText = 'Сбросить игру';
        resetButton.addEventListener('click', () => this.reset());
        this.container.appendChild(resetButton);

        // Board UI
        const boardUI = document.createElement('div');
        boardUI.classList.add('board');
        this.container.appendChild(boardUI);

        for (let row = 0; row < this.boardState.length; row++) {
            for (let col = 0; col < this.boardState[row].length; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.innerText = this.boardState[row][col] || '';
                cell.addEventListener('click', () => this.clickCell(row, col));
                boardUI.appendChild(cell);
            }
        }
    }
    
    clickCell(row, col) {
        if (this.boardState[row][col] !== null || this.gameOver) {
            return; // Cell already occupied
        }
        this.boardState[row][col] = this.players[this.currentPlayerIndex];

        if (this.checkWin()) {
            this.gameStatus = `Победил игрок: ${this.players[this.currentPlayerIndex]}!`;
            this.render();
            this.gameOver = true;
            return;
        }

        this.currentPlayerIndex = 1 - this.currentPlayerIndex; // Switch player
        this.gameStatus = `Сейчас ходит: ${this.players[this.currentPlayerIndex]}`;

        this.render();
    }

    checkWin() {
        const cellsState = this.boardState;
        for (let r = 0; r < 3; r++) {
            if (cellsState[r][0] && cellsState[r][0] === cellsState[r][1] && cellsState[r][1] === cellsState[r][2]) {
                return true;
            }
        }

        for (let c = 0; c < 3; c++) {
            if (cellsState[0][c] && cellsState[0][c] === cellsState[1][c] && cellsState[1][c] === cellsState[2][c]) {
                return true;
            }
        }

        if (cellsState[0][0] && cellsState[0][0] === cellsState[1][1] && cellsState[1][1] === cellsState[2][2]) {
            return true;
        }

        if (cellsState[0][2] && cellsState[0][2] === cellsState[1][1] && cellsState[1][1] === cellsState[2][0]) {
            return true;
        }

        return false
    }

    reset() {
        this.boardState = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentPlayerIndex = 0;
        this.gameStatus = `Сейчас ходит: ${this.players[this.currentPlayerIndex]}`;
        this.gameOver = false;
        this.render();
    }
}

new TicTacToe(app);