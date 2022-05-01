/**
 * Math delta
 *
 * @param {number} a
 * @param {number} b
 * @param {number} size
 */
export default (a :number, b :number, size = 0) :number => {
  // return (a - b + (3 * size + 1)) % (2 * size + 1) - size;
  return Math.min(size - (a - b), (a - b));
};
