/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  const dogIndex = arr.lastIndexOf('@');
  return arr.slice(dogIndex + 1).join('');
}

module.exports = getEmailDomain;
