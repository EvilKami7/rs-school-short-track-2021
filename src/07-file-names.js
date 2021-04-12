/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const repeating = {};
  const namesSort = [];
  names.forEach((item) => {
    if (Object.keys(repeating).includes(item)) {
      namesSort.push(`${item}(${repeating[item]})`);
      repeating[`${item}(${repeating[item]})`] = 1;
      repeating[item] += 1;
    } else {
      namesSort.push(item);
      repeating[item] = 1;
    }
  });
  return namesSort;
}

module.exports = renameFiles;
