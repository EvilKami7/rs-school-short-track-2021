/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    mineMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let mines = 0;
      for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, matrix.length - 1); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, matrix[i].length - 1); y++) {
          if (x !== i || y !== j) {
            if (matrix[x][y]) mines += 1;
          }
        }
      }
      mineMatrix[i].push(mines);
    }
  }
  return mineMatrix;
}

module.exports = minesweeper;
