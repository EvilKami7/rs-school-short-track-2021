/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indices = [];
  let array = [];
  let idx = arr.indexOf(-1);
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(-1, idx + 1);
  }
  array = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  indices.forEach((index) => {
    array.splice(index, 0, -1);
  });
  return array;
}

module.exports = sortByHeight;
