/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let entries = 0;
  const string1 = [...s1];
  const string2 = [...s2];
  string1.forEach((item) => {
    if (string2.includes(item)) {
      entries += 1;
      string2.splice(string2.indexOf(item), 1);
    }
  });
  return entries;
}

module.exports = getCommonCharacterCount;
