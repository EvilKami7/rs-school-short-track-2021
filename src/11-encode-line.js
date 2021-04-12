/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const letter = {};
  for (let i = 0; i < arr.length; i++) {
    if (!Object.keys(letter).includes(arr[i])) {
      letter[arr[i]] = 1;
    } else if (Object.keys(letter).includes(arr[i]) && arr[i - 1] !== arr[i]) {
      letter[arr[i] + 1] = 1;
    } else {
      letter[arr[i]] += 1;
    }
  }
  const strArr = [];
  Object.entries(letter).forEach(([key, value]) => {
    strArr.push(value, key);
  });
  return strArr.flat(2).join('').replace(/1/g, '');
}

module.exports = encodeLine;
