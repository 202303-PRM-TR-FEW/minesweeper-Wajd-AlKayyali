function minesweeperBoard(board) {
    const numRows = board.length;
    const numCols = board[0].length;
  
    const resultBoard = [];
  
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        if (board[i][j] === 1) {
          row.push(9); // 9 represents a mine
        } else {
          let count = 0;
          // Check the 8 adjacent cells for mines
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              const newRow = i + x;
              const newCol = j + y;
  
              if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && board[newRow][newCol] === 1) {
                count++;
              }
            }
          }
          row.push(count);
        }
      }
      resultBoard.push(row);
    }
  
    return resultBoard;
  }