const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *  base requirements
      1) should return sequence from pre-sorted array
      2) should return sorted sequence
      3) empty team shouldn't lead to error
    functional requirements
      4) should handle whitespaces
      5) should handle lowercase
      6) should return false on wrong type
      7) should ignore non-string values
      8) should handle non-standard cases
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const letters = members
    .filter((member) => typeof member === 'string')
    .map((member) => member.trim()[0].toUpperCase())
    .sort();
  return letters.join('');
}

module.exports = {
  createDreamTeam
};
